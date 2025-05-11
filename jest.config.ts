import type { JestConfigWithTsJest } from 'ts-jest';
import { setDefaultResultOrder } from 'dns';

setDefaultResultOrder('ipv4first');

const config: JestConfigWithTsJest = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {}],
  },
  testMatch: ['**/src/tests/**/*.test.ts'],
};

export default config;
