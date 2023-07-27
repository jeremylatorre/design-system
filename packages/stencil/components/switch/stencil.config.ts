import { Config } from '@stencil/core';
import { getStencilConfig } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import * as jestConfig from './jest.config';

const args = process.argv.slice(2);

export const config: Config = getStencilConfig({
  namespace: 'osds-switch',
  args,
  jestConfig: jestConfig.default,
  reactOutput: {
    componentCorePackage: '@ovhcloud/ods-stencil/components/switch',
    // exclude peer dependencies that corresponds to www usage
    excludeComponents: ['osds-radio', 'osds-radio-group']
  },
  vueOutput: {
    componentCorePackage: '@ovhcloud/ods-stencil/components/switch',
    excludeComponents: ['osds-radio', 'osds-radio-group']
  },
  dev: {
    globalScript: 'src/global.dev.ts',
  },
  prod: {
    globalScript: 'src/global.prod.ts'
  },
  test: {
    globalScript: 'src/global.test.ts'
  }
});