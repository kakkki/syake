module.exports = {
  verbose: true,
  testMatch: [
    "**/__tests__/**/*.{js,ts}",
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: [
    "js",
    "ts",
    "json",
    "node"
  ],
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      babelConfig: false,
      isolatedModules: true,
      tsConfig: "./tsconfig.jest.json",
      diagnostics: {
        pathRegex: /\.(spec|test)\.ts$/
      }
    }
  }
}
