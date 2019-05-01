module.exports = function (api) {
  api.env();
  const presets = [
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        targets: {
          node: "8.16.0"
        },
        useBuiltIns: "usage",
        corejs: 3,
      }
    ]
  ];

  const plugins = [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ];

  return {
    presets,
    plugins
  };
}
