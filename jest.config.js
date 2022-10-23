// /** @type {import('ts-jest').JestConfigWithTsJest} */
// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'jsdom',
//   transform: {
//     "\\.[jt]sx?$": "babel-jest",
//   },
//   transformIgnorePatterns: ["<rootDir>/node_modules/.pnpm/(?!(@teambit+design.inputs.input-text)@)"],
// };

const { defaults } = require('jest-config');
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  transformIgnorePatterns: ["<rootDir>/node_modules/.pnpm/(?!(@teambit+design.inputs.input-text)@)"],
};

