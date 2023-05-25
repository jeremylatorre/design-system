import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';

import { defineCustomElements } from '@ovhcloud/ods-stencil-pagination/loader';

import { XDConfig } from 'storybook-addon-xd-designs/lib/config';
import { config } from 'storybook-addon-xd-designs';
import changelog from '@ovhcloud/ods-stencil-pagination/CHANGELOG.md';
import page from './pagination.web-component.stories.page.mdx';
import { getTagAttributes, extractArgTypes, extractStoryParams } from '../../../core/componentHTMLUtils';
import { odsPaginationDefaultAttributes } from '@ovhcloud/ods-core';

defineCustomElements();

const storyParams = {
  current: {
    category: 'General',
    defaultValue: 5,
  },
  total: {
    category: 'General',
    defaultValue: 21,
  },
  disabled: {
    category: 'Misc',
    defaultValue: odsPaginationDefaultAttributes.disabled,
  },
};

export default {
  title: 'UI Components/Pagination [molecule]/Web Component',
  parameters: {
    notes: {
      API: iframe('stencil-pagination/modules/index.html'),
      changelog,
    },
    docs: { page },
    design: config({
      artboardUrl: 'https://xd.adobe.com/view/0837f929-5752-4f29-9c31-be930bfe7f17-5d64/screen/be25b614-ad37-45fd-9e7d-6796b5c2e405/',
    } as XDConfig),
  },
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const TemplateDefault = (args: any) => html` <osds-pagination ...=${getTagAttributes(args)}> </osds-pagination> `;
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};

/* All */
const TemplateAll = () => html`
  <div style="text-align:center">
    <osds-pagination current="2" total="4"></osds-pagination>
    <p id="select3-info" style="font-style: italic;">4 pages to display, current page 2</p>
  </div>

  <div style="text-align:center">
    <osds-pagination current="5" total="6"></osds-pagination>
    <p id="select3-info" style="font-style: italic;">6 pages to display, current page 5</p>
  </div>

  <div style="text-align:center">
    <osds-pagination current="5" total="7"></osds-pagination>
    <p id="select3-info" style="font-style: italic;">7 pages to display, current page 5</p>
  </div>

  <div style="text-align:center">
    <osds-pagination current="5" total="9"></osds-pagination>
    <p id="select4-info" style="font-style: italic;">9 pages to display, current page 5</p>
  </div>

  <div style="text-align:center">
    <osds-pagination current="5" total="9" disabled="true"></osds-pagination>
    <p id="select4-info" style="font-style: italic;">Disabled</p>
  </div>
`;
export const All = TemplateAll.bind({});
All.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false },
};