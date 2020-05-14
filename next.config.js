const withSass = require("@zeit/next-sass");
const withImages = require("next-images");

const config = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  sassLoaderOptions: {
    prependData: '@import "styles/variables.scss";',
  },
  env: {
    customKey: "my-value",
    API: "https://wydfdauvw5.execute-api.sa-east-1.amazonaws.com",
  },
};

module.exports = withSass(withImages(config));
