import type { OdsSelectAttribute } from '../interfaces/attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { ODS_SELECT_SIZE } from './select-size';

const DEFAULT_ATTRIBUTE: OdsSelectAttribute = Object.freeze({
  ariaLabel: null,
  ariaLabelledby: '',
  color: OdsThemeColorIntent.primary,
  defaultValue: '',
  disabled: false,
  inline: false,
  opened: false,
  required: false,
  size: ODS_SELECT_SIZE.md,
  value: '',
});

export {
  DEFAULT_ATTRIBUTE,
};