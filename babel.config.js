module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["import", { libraryName: "@ant-design/react-native" }],
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        }
      ],
      // The difference with the Web platform is that you do not need to set the style
    ],
  };
};
