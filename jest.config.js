module.exports = {
  rootDir: process.cwd(),
  moduleFileExtensions: ["js"],
  testPathIgnorePatterns: ["/node_modules/"],
  testMatch: ["<rootDir>/**/*.unit.test.*.js"],
  transform: { "\\.(js)$": "babel-jest" },
  testEnvironment: "node",
};
