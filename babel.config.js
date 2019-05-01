module.exports = function (api) {
  api.env();
  const presets = [
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

  return { presets };
}
