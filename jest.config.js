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
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.ts",
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
  }
};
