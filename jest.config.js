module.exports = {
  rootDir: process.cwd(),
  moduleFileExtensions: [
    "js",
    "ts"
  ],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  testMatch: [
    "<rootDir>/**/*.unit.test.*.ts",
  ],
  transform: {
    "\\.(js|ts)$": "babel-jest",
  },
  testEnvironment: "node",
};
