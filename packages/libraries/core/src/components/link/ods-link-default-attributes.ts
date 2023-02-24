import { OdsLinkAttributes } from './ods-link-attributes';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import { OdsHTMLAnchorElementTarget } from '../../types/ods-html-anchor-element-target';

/**
 * default attribute values of link
 */
export const odsLinkDefaultAttributesDoc = {
  color: OdsThemeColorIntent.default,
  contrasted: false,
  disabled: false,
  download: undefined,
  href: '',
  referrerpolicy: undefined,
  rel: undefined,
  target: OdsHTMLAnchorElementTarget._self,
  type: undefined,
} as const;

export const odsLinkDefaultAttributes = odsLinkDefaultAttributesDoc as OdsLinkAttributes;
