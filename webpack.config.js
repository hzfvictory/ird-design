const path = require('path');
module.exports = {

  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src"),
      'packages': path.resolve(__dirname, "packages"),
      'doc': path.resolve(__dirname, "examples"),
    }
  }
};
