// ###
// global script file to include only in dev mode with the www dev server.
// it always has to include './components' and './global.ts'
// ###

import './components';
import './global';
import { OdsLogger } from '@ovhcloud/ods-common-core';
import '@ovhcloud/ods-component-button';
import '@ovhcloud/ods-component-icon';
import { OsdsCode } from '@ovhcloud/ods-component-code';

const code1: (HTMLElement & OsdsCode) | null = document.getElementById('code-1') as (HTMLElement & OsdsCode) | null;

const logger = new OdsLogger('global-dev');
logger.log('init', code1);

(window as any).globalMethod = async function () {
  logger.log('globalMethod');
};

(async () => {
  await customElements.whenDefined('osds-code');
})();