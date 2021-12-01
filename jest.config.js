module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "!src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  moduleFileExtensions: ["tsx", "ts", "js", "jsx", "json", "node"],
  moduleDirectories: ["node_modules", "src"]
};
