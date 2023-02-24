import { E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsCartItemAttributes,
  OdsComponentAttributes2StringAttributes,
  OdsLogger,
  odsCartItemDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsCartItemBaseAttributes } from '@ovhcloud/ods-testing';

const logger = new OdsLogger('osds-cart-item-e2e');

describe('e2e:osds-cart-item', () => {
  let page: E2EPage;

  async function setup({ attributes, html }: { attributes: Partial<OdsCartItemAttributes>, html: string }) {
    const minimalAttributes: OdsCartItemAttributes = OdsCreateAttributes(attributes, odsCartItemBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsCartItemAttributes>(minimalAttributes, odsCartItemDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-cart-item ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-cart-item>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    const root = await page.find('osds-cart-item');
    const activeElId = await page.evaluate(() => document);
    logger.log(activeElId);
    logger.log(root);
  }

  const slots = [
    {
      slotName: 'subhead',
      html: `<span slot='subhead'>Subhead</span>`,
    },
    {
      slotName: 'title',
      html: `<span slot='title'>Title</span>`,
    },
    {
      slotName: 'price',
      html: `<span slot='price'>Price</span>`,
    },
    {
      slotName: 'extra',
      html: `<span slot='extra'>Extra</span>`,
    },
  ];

  describe('screenshots', () => {
    it('check with all slots', async () => {
      await setup({
        attributes: {}, html: `
        <span slot='subhead'>My subhead</span>
        <span slot='title'>My title</span>
        <span slot='price'>My price</span>
        <span slot='extra'>My extra</span>`,
      });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('osds-cart-item') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('all slots & css', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    describe('screenshots for each slot', () => {
      slots.forEach(({ slotName, html }) => {
        it(slotName, async () => {
          await setup({
            attributes: {}, html,
          });

          await page.waitForChanges();
          await page.evaluate(() => {
            const element = document.querySelector('osds-cart-item') as HTMLElement;
            return { width: element.clientWidth, height: element.clientHeight };
          });
          await page.setViewport({ width: 600, height:600 });
          const results = await page.compareScreenshot('each slot', { fullPage: false, omitBackground: true });
          expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
        });
      });
    });
  });

});
