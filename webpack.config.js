const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { readdirSync, readFileSync, existsSync } = require('fs');

const isProduction = process.env.NODE_ENV !== 'development';

const excludedFolders = ['styles'];

const srcDir = path.join(__dirname, './src');
const projectsDir = path.join(__dirname, './src/projects');

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
const parseTitle = (body) => {
  let match = body.match(/<title>([^<]*)<\/title>/);
  if (!match || typeof match[1] !== 'string')
    throw new Error('Unable to parse the title tag');
  return match[1];
};

let entries = {};
const defaultFileNames = ['script.js', 'main.js'];

const projects = getDirectories(projectsDir);

const plugins = projects.map((folderName) => {
  const folderPath = path.join(projectsDir, `./${folderName}`);
  const htmlContent = readFileSync(
    path.join(folderPath, './index.html'),
    'utf-8'
  );
  const title = parseTitle(htmlContent);
  let javascriptFile;
  const potentialFileNames = [...defaultFileNames, `${folderName}.js`];
  for (let i = 0, len = potentialFileNames.length; i < len; ++i) {
    const filePath = path.join(folderPath, `./${potentialFileNames[i]}`);
    if (existsSync(filePath)) {
      javascriptFile = filePath;
      break;
    }
  }
  if (!javascriptFile) {
    throw new Error(`No entry file found for project ${folderName}`);
  }
  entries[folderName] = javascriptFile;
  const config = {
    title,
    chunks: [folderName],
    template: path.join(folderPath, './index.html'),
    filename: path.join(folderName, './index.html'),
    inject: 'body',
  };
  return new HtmlWebpackPlugin(config);
});

if (isProduction) {
  const htmlArr = projects.map((folderName) => {
    return `<a href="${folderName}" class="list-group-item">${folderName}</a>`;
  });
  const copyDirectoryHTML = new CopyWebpackPlugin({
    patterns: [
      {
        from: path.join(srcDir, `./index.html`),
        to: 'index.html',
        transform(content) {
          return content
            .toString()
            .replace('{{Directories}}', htmlArr.join(''));
        },
      },
    ],
  });
  plugins.push(copyDirectoryHTML);
}

module.exports = {
  mode: process.env.NODE_ENV,
  entry: entries,
  devtool: 'inline-source-map',
  plugins,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    writeToDisk: true,
  },
  output: {
    filename: '[name]/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/styles'),
      '@scripts': path.resolve(__dirname, './src/scripts'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'ie 11' }]],
          },
        },
      },
    ],
  },
};
