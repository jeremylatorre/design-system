import { ODS_THEME_COLOR_INTENT, ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { ODS_ICON_NAMES, ODS_ICON_SIZE, ODS_ICON_SIZES } from '@ovhcloud/ods-components/icon';
import { defineCustomElements } from '@ovhcloud/ods-components/icon/loader';
import { html } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { createComponentTable, extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: ODS_THEME_COLOR_INTENT.default,
    options: ODS_THEME_COLOR_INTENTS,
    control: { type: 'select' },
  },
  size: {
    category: 'General',
    defaultValue: ODS_ICON_SIZE.md,
    options: ODS_ICON_SIZES,
    control: { type: 'select' },
  },
  ariaName: {
    category: 'Misc',
    defaultValue: 'Home icon',
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false,
  },
  name: {
    category: 'Misc',
    defaultValue: 'home',
  },
};

export default {
  title: 'ODS Components/Content/Icon [quark]/Demo',
  id: 'icon',
  argTypes: extractArgTypes(storyParams)
};

// A icon example
const TemplateDefault = (args: any) => html`
<div class='icon-container'>
  <osds-icon ...=${getTagAttributes(args)}>
  </osds-icon>
</div>
`;
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};

const defaultTag = 'osds-icon';

const iconTemplate = (i:string) => html`
  <span class='table-cell' style='width: 8em; margin: .5em auto'>
    <osds-icon name='${i}' color='primary' size='lg'></osds-icon>
    <div style='font-size: .8rem; margin-top: .5em'>${i}</div>
  </span>`;

const TemplateAll = () => html`
<style>
.table {
  margin: 1em auto;
}
.table-row {
  display: flex;
  margin: .5em auto;
  align-items: center;
}
.table-cell {
  display: inline-flex;
  width: 6em;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}
</style>

<span class='table'>
${repeat(ODS_ICON_NAMES, (i) => iconTemplate(i))}
</span>

<h3>Sizes & Colors</h1>
${unsafeHTML(createComponentTable(
    defaultTag,
    { size: ODS_ICON_SIZES },
    { color: ODS_THEME_COLOR_INTENTS },
    '',
    { name: 'home' },
  ))}
</div>
`;
export const All = TemplateAll.bind({});
// @ts-ignore
All.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false },
};
