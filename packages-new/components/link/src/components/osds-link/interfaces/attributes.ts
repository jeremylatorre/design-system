import type  { ODS_LINK_REFERRER_POLICY } from '../constants/referrer-policies';
import type { OdsThemeColorIntent } from '@ovhcloud/ods-theming';
import type { OdsHTMLAnchorElementRel, OdsHTMLAnchorElementTarget } from '@ovhcloud/ods-common-core'

interface OdsLinkAttribute {
  /** Link color theme */
  color?: OdsThemeColorIntent
  /** Link design as contrasted version */
  contrasted?: boolean
  /** Link should be disabled or not */
  disabled?: boolean
  /**  Link as download source */
  download?: HTMLAnchorElement['download']
  /** Link URL */
  href?: string
  /** Link referrer policy */
  referrerpolicy?: ODS_LINK_REFERRER_POLICY
  /**  Link relationship */
  rel?: OdsHTMLAnchorElementRel
  /**
   * Link target type
   * If href is set the default value `_self` is set
   */
  target?: OdsHTMLAnchorElementTarget
  /** Link type (for download source) */
  type?: string
}

export {
  OdsLinkAttribute,
};