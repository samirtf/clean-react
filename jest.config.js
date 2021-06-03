/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig.json')
const moduleNameMapper = pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' })

module.exports = {
  roots: ['<rootDir>/'],
  collectCoverageFrom: [
    '<rootDir>/**/*.{ts, tsx}'
  ],
  moduleDirectories: [
    '.',
    'src',
    'src/util',
    'node_modules'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx|js)$': 'ts-jest'
  },
  moduleNameMapper
}
