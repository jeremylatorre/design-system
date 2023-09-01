import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsPhoneNumberAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_COUNTRY_ISO_CODE } from '@ovhcloud/ods-common-core';

describe('e2e:osds-phone-number', () => {
  const baseAttribute = { ariaLabel: '', forbiddenValues: [], value: '' };
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, onPage }: { attributes?: Partial<OdsPhoneNumberAttribute>, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsPhoneNumberAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`<osds-phone-number ${odsStringAttributes2Str(stringAttributes)}></osds-phone-number>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-phone-number');
  }
  
  describe('attributes', () => {
    [false, true].forEach((disabled) => {
      [false, true].forEach((error) => {
        [[], 'all', [ODS_COUNTRY_ISO_CODE.FR, ODS_COUNTRY_ISO_CODE.AD]].forEach((countries) => {
          [undefined, ODS_COUNTRY_ISO_CODE.FR].forEach((locale) => {  
            [undefined, ODS_COUNTRY_ISO_CODE.FR].forEach((isoCode) => {  
              [false, true].forEach((clearable) => {
                ['', 'value'].forEach((value) => {
                  it([clearable, countries, disabled, error, isoCode, locale, value].join(', '), async () => {
                    await setup({
                      attributes: {
                        clearable,
                        disabled,
                        error,
                        isoCode,
                        locale,
                        value,
                      },
                    });
                    el.setProperty('countries', countries),
                    await page.waitForChanges();

                    await page.evaluate(() => {
                      const element = document.querySelector('osds-phone-number') as HTMLElement;
                      return { width: element.clientWidth, height: element.clientHeight };
                    });
                    await page.setViewport({ width: 600, height:600 });
                    const results = await page.compareScreenshot('phone-number', { fullPage: false, omitBackground: true });
                    expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
                  });
                });
              });
            });
          });
        });
      });
    });
  })
});