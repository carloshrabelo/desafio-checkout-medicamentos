module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/proposal-class-properties",
    "@babel/plugin-transform-runtime",
    [
      "babel-plugin-styled-components",
      {
        ssr: true,
        displayName: true,
        preprocess: false,
      },
    ],
  ],
};
