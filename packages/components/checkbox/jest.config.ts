import type { Config } from '@jest/types';
import { OdsGetJestConfig } from '@ovhcloud/ods-common-testing';

const args = process.argv.slice(2);

// @ts-ignore until dependencies are fixed to one unique version of @jest/types
const config: Config.InitialOptions = {
  ...OdsGetJestConfig({
    basePath: '<rootDir>/../../..',
    args
  }),
  /**
   * global function executed first and outside the environment test
   * @see https://jestjs.io/fr/docs/configuration#globalsetup-string
   */
  globalSetup: "./jest.global.ts",
};
export default config;