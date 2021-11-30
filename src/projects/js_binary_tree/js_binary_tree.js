class Node {
  constructor(element) {
    this.element = element;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    return {
      element: 'test',
      left: {
        element: 'test12',
        left: {
          element: 'test122',
        },
        right: {
          element: 'test123',
        },
      },
      right: {
        element: 'test13',
        left: {
          element: 'test132',
        },
        right: {
          element: 'test133',
          left: {
            element: 'test1332',
          },
          right: {
            element: 'test1333',
          },
        },
      },
    };
  }
}

export default BinaryTree;
