import { ODS_COUNTRY_ISO_CODE, Ods, OdsExternalLogger } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { OsdsFlag } from '@ovhcloud/ods-component-flag/react';
import { OsdsToggle } from '@ovhcloud/ods-component-toggle/react';
import { OsdsButton } from '@ovhcloud/ods-components/button/react';
import { OsdsCheckbox } from '@ovhcloud/ods-components/checkbox/react';
import { ODS_CHECKBOX_BUTTON_SIZE } from '@ovhcloud/ods-components/checkbox-button';
import { OsdsCheckboxButton } from '@ovhcloud/ods-components/checkbox-button/react';
import { ODS_MESSAGE_TYPE } from '@ovhcloud/ods-components/message';
import { OsdsMessage } from '@ovhcloud/ods-components/message/react';
import { OsdsRadio, OsdsRadioGroup } from '@ovhcloud/ods-components/radio/react';
import { OsdsTile } from '@ovhcloud/ods-components/tile/react';
import React from 'react';

import CartManagerUsage from './CartManagerUsage';
import CartUsage from './CartUsage';
import MyButton from './MyButton';

// you can import react proxy from the independent package

// each type you import types from ODS, you will need to import the core

// each theming related type you use, you will need to import the theming



// enable logging of ODS and custom logger
Ods.instance().logging(true);

// custom logger: using the logger embedded inside ODS
const logger: OdsExternalLogger = new (Ods.instance().logger)('[my react Demo]');

function handleOdsButtonClick() {
  logger.log('click on OsdsButton');
}

function handleMyButtonClick() {
  logger.log('click on myButton');
}


const Demo: React.FC = () => (
  <div className={'ods-demo'}>
    <h3 className={'ods-subheading-200'}>ODS React components</h3>
    <h5>Ods Button</h5>
    <div>
      <OsdsButton color={ODS_THEME_COLOR_INTENT.primary} onClick={handleOdsButtonClick}>ODS button</OsdsButton>
      <MyButton onClick={handleMyButtonClick}>My React Button based on ODS</MyButton>
    </div>

    <h5>Ods Flag</h5>
    <div style={{ height: 20, width: 30, margin: 'auto' }}>
      <OsdsFlag iso={ODS_COUNTRY_ISO_CODE.PL} />
    </div>

    <h5>Ods Message</h5>
    <OsdsMessage type={ODS_MESSAGE_TYPE.info}>You can use a message here</OsdsMessage>

    <h5>Ods Tile in radio group</h5>
    <OsdsRadioGroup>
      <OsdsRadio value="A">
        <OsdsTile hoverable>Radio-group with Radio & Tile in it (option A)</OsdsTile>
      </OsdsRadio>
      <OsdsRadio value="B">
        <OsdsTile hoverable>Radio-group with Radio & Tile in it (option B)</OsdsTile>
      </OsdsRadio>
    </OsdsRadioGroup>

    <h5>Ods CheckboxButton in radio group</h5>
    <OsdsRadioGroup>
      <OsdsRadio value="A">
        <OsdsCheckboxButton size={ODS_CHECKBOX_BUTTON_SIZE.sm} interactive>
          <span slot={'end'}>Option A</span>
        </OsdsCheckboxButton>
      </OsdsRadio>
      <OsdsRadio value="B">
        <OsdsCheckboxButton size={ODS_CHECKBOX_BUTTON_SIZE.sm} interactive>
          <span slot={'end'}>Option B</span>
        </OsdsCheckboxButton>
      </OsdsRadio>
    </OsdsRadioGroup>

    <h5>Ods Toggle</h5>
    <OsdsCheckbox value="A" checked>
      <OsdsToggle></OsdsToggle>
    </OsdsCheckbox>

    <h5>Ods Cart</h5>
    <CartUsage></CartUsage>

    <h5>Ods CartManager</h5>
    <CartManagerUsage></CartManagerUsage>
  </div>
);

export default Demo;
