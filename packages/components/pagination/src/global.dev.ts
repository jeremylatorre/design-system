// ###
// global script file to include only in dev mode with the www dev server.
// it always has to include './components' and './global.ts'
// ###

import './components';
import './global';
import { OdsLogger, OdsInitializedEvent, OdsInitializedEventName } from '@ovhcloud/ods-common-core';
import '@ovhcloud/ods-component-button';
import '@ovhcloud/ods-component-icon';
import '@ovhcloud/ods-component-select';
import '@ovhcloud/ods-component-text';
import '@ovhcloud/ods-component-tooltip';

const logger = new OdsLogger('global-dev');
logger.log('init');

/* wait for the pagination to be initialized as web component */
(async () => {
  await customElements.whenDefined('osds-pagination');
})();

document.addEventListener(OdsInitializedEventName, event => {
  const evt = event as OdsInitializedEvent;
  const instance = evt.detail.instance;
  instance.logging(true);
  logger.log('odsInitialized received');
});