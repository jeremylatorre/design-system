// ###
// global script file to include only in dev mode with the www dev server.
// it always has to include './components' and './global.ts'
// ###

import './components';
import './global';
import { OdsLogger } from '@ovhcloud/ods-core';


import '@ovhcloud/ods-stencil/components/link';
import '@ovhcloud/ods-stencil/components/icon';
import '@ovhcloud/ods-stencil/components/text';

const logger = new OdsLogger('global-dev');
logger.log('init');

(window as any).globalMethod = async function () {
  logger.log('globalMethod');
};

(async () => {
  await customElements.whenDefined('osds-text');
  await customElements.whenDefined('osds-link');
  await customElements.whenDefined('osds-tabs');
  await customElements.whenDefined('osds-tab-bar');
  await customElements.whenDefined('osds-tabs-bar-item');
  await customElements.whenDefined('osds-tab-panel');
})();
