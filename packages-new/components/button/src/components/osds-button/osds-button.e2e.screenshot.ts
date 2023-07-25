import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsButtonAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { ODS_BUTTON_SIZES } from './constants/button-size';
import { ODS_BUTTON_VARIANTS } from './constants/button-variant';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-button', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsButtonAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsButtonAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`
      <osds-button ${odsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-button>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '4px'));
    el = await page.find('osds-button');
  }

  describe('screenshots', () => {
    // Todo : add active behaviour on top of hover and focus
    [() => {}, () => el.setProperty('contrasted', true), () => el.setProperty('disabled', true), () => {el.setProperty('contrasted', true); el.setProperty('disabled', true)},() => el.setProperty('circle', true)].forEach((action) => {
      [() => {}, () => el.hover(), () => el.focus()].forEach((behaviour) => {
        OdsThemeColorIntentList.forEach((color) => {
          ODS_BUTTON_SIZES.forEach((size) => {
            ODS_BUTTON_VARIANTS.forEach((variant) => {
                it([color, variant, size, action, behaviour].join(', '), async () => {
                  await setup({
                    attributes: {
                      color,
                      size,
                      variant,
                    },
                    html: `Button`
                  });
                  action();
                  await behaviour();
                  await page.waitForChanges();

                  await page.evaluate(() => {
                    const element = document.querySelector('osds-button') as HTMLElement;
                    return { width: element.clientWidth, height: element.clientHeight };
                  });
                  await page.setViewport({ width: 600, height: 600 });
                  const results = await page.compareScreenshot('button', { fullPage: false, omitBackground: true });
                  expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
              });
            });

            it(`${[color, size, action, behaviour].join(', ')} link`, async () => {
              await setup({
                attributes: {
                  color,
                  size,
                  href: '#',
                },
                html: `Button`
              });
              action();
              await behaviour();
              await page.waitForChanges();
              await page.setViewport({ width: 600, height:600 });
              const results = await page.compareScreenshot('button', { fullPage: false, omitBackground: true });
              expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
            });
          });
        });
      });
    });
  });
});