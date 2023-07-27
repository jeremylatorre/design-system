// ###
// global script file to include only in dev mode with the www dev server.
// it always has to include './components' and './global.ts'
// ###

import './components';
import './global';
import { OdsLogger } from '@ovhcloud/ods-core';

// Input slot dependencies
import '@ovhcloud/ods-stencil/components/input';
import '@ovhcloud/ods-component-icon';
import '@ovhcloud/ods-stencil/components/spinner';
import '@ovhcloud/ods-component-textarea';

// Top right slot dependencies
import '@ovhcloud/ods-stencil/components/link';
import '@ovhcloud/ods-stencil/components/tooltip';

// Other dependencies
import '@ovhcloud/ods-component-text';

const logger = new OdsLogger('global-dev');
logger.log('init');

(window as any).globalMethod = async function () {
  logger.log('globalMethod');
};

(async () => {
  await customElements.whenDefined('osds-form-field');
})();