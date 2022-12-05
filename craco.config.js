const path = require('path');

module.exports = {
  //...
  webpack: {
    alias: {
      '@Assets': path.resolve(__dirname, 'src/assets/'),
      '@Redux': path.resolve(__dirname, 'src/redux/'),
      '@Components': path.resolve(__dirname, 'src/Components/'),
    },
  },
};