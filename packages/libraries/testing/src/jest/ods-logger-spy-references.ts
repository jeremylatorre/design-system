import { OdsLoggerMethodSpies } from './ods-logger-method-spies';
import { OdsLogger } from '@ovhcloud/ods-core';
import { OdsComponentForTesting } from '../unit/ods-component-for-testing';

/**
 * references of a spied ods logger.
 * the references are created once the ods logger spy is initialized with `OdsInitializeLoggerSpy`
 * @see OdsInitializeLoggerSpy
 */
export interface OdsLoggerSpyReferences<T extends (unknown & { prototype: unknown; }) = { prototype: unknown; }> {
  /** class or prototype's class on which to spy the logger property */
  spiedClass: T,
  /** name of the logger property used into the spied class (default to 'logger') */
  propertyName: keyof OdsComponentForTesting,
  /** object of spies for the different logger's methods */
  methodSpies: OdsLoggerMethodSpies
  /** spy of the logger property for the spied class */
  propertySpy: jest.SpyInstance<OdsLogger, []>
}
