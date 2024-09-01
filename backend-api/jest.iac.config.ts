import type {Config} from 'jest'

const config: Config = {
  testEnvironment: 'node',
  roots: ['<rootDir>/iac/test'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
}

export default config
