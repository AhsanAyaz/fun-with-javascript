const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { readdirSync, readFileSync, existsSync } = require('fs');

const excludedFolders = ['styles'];

const srcDir = path.join(__dirname, './src');

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => {
      return dirent.isDirectory() && !excludedFolders.includes(dirent.name);
    })
    .map((dirent) => dirent.name);
const parseTitle = (body) => {
  let match = body.match(/<title>([^<]*)<\/title>/);
  if (!match || typeof match[1] !== 'string')
    throw new Error('Unable to parse the title tag');
  return match[1];
};

let entries = {};
const defaultFileNames = ['script.js', 'main.js'];

const projects = getDirectories(srcDir);

const plugins = projects.map((folderName) => {
  const folderPath = path.join(srcDir, `./${folderName}`);
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

module.exports = {
  mode: 'development',
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
