import { OdsValidityState } from '../../../form/validation/ods-validity-state';
import { OdsInputValue } from '../../input/public-api';
import { OdsSelectOption } from '../select-option/public-api';

export interface OdsSelectValueChangeEventDetail {
  value: OdsInputValue,
  oldValue?: OdsInputValue,
  validity: OdsValidityState,
  selection: OdsSelectOption | null,
}
