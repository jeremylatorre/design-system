import { E2EElement, E2EPage, newE2EPage } from "@stencil/core/testing";
import { OdsAccordionAttributes, OdsAccordionSizeList, OdsComponentAttributes2StringAttributes, odsAccordionDefaultAttributes } from "@ovhcloud/ods-core";
import { OdsCreateAttributes, OdsStringAttributes2Str, odsAccordionBaseAttributes } from "@ovhcloud/ods-testing";

import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

describe('e2e:screenshot:osds-accordion', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsAccordionAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsAccordionAttributes = OdsCreateAttributes(attributes, odsAccordionBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsAccordionAttributes>(minimalAttributes, odsAccordionDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
      <style>
      :root {
        --ods-accordion-animation-opening: none;
      }
      </style>
      <osds-accordion ${OdsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-accordion>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '4px'));
    el = await page.find('osds-accordion');
  }

  describe('screenshots', () => {
    [() => { }, () => el.setProperty('disabled', true)].forEach((setDisabled) => {
      [() => { }, () => el.setProperty('contrasted', true)].forEach((setContrasted) => {
        [undefined, OdsThemeColorIntent.primary].forEach((color) => {
          [false, true].forEach((opened) => {
            [undefined, 'Accordion content'].forEach((content) => {
              OdsAccordionSizeList.forEach((size) => {
                it([color, opened, content, size, setDisabled, setContrasted].join(', '), async () => {
                  await setup({
                    attributes: {
                      color,
                      opened,
                      size
                    },
                    html: `<span slot="summary">Accordion</span>${content}`
                  });
                  setDisabled();
                  setContrasted();
                  await page.waitForChanges();

                  await page.evaluate(() => {
                    const element = document.querySelector('osds-accordion') as HTMLElement;
                    return { width: element.clientWidth, height: element.clientHeight };
                  });
                  await page.setViewport({ width: 600, height:600 });
                  const results = await page.compareScreenshot('accordion', { fullPage: false, omitBackground: true });
                  expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
                });
              });
            });
          });
        });
      });
    });
  });
});
