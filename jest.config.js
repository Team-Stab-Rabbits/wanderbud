const path = require('path');
module.exports = {
  "verbose": true,
  "testEnvironment": "jest-environment-jsdom",
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$"
      : path.resolve(__dirname, '__test__/mock_assets/file-mock.js'),
  }
}
