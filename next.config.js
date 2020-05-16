const withImages = require("next-images");

const config = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  env: {
    API: "https://wydfdauvw5.execute-api.sa-east-1.amazonaws.com",
  },
};

module.exports = withImages(config);
