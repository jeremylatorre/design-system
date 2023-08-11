// ###
// global script file to include only in dev mode with the www dev server.
// it always has to include './components' and './global.ts'
// ###

import { OdsLogger } from '@ovhcloud/ods-common-core';
import './components';
import './global';
import '@ovhcloud/ods-component-tile';

const logger = new OdsLogger('global-dev');
logger.log('init');

(async () => {
  await customElements.whenDefined('osds-checkbox');
})();