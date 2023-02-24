import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsTileAttributes,
  odsTileDefaultAttributes,
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsTileBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-tile', () => {
  let page: E2EPage;
  let el: E2EElement;
  let slotContent: E2EElement;

  async function setup({
                         attributes = {},
                         html = ``,
                         onPage
                       }: { attributes?: Partial<OdsTileAttributes>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    const minimalAttributes: OdsTileAttributes = OdsCreateAttributes(attributes, odsTileBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsTileAttributes>(minimalAttributes, odsTileDefaultAttributes);

    page = await newE2EPage();
    onPage && await onPage({ page });

    await page.setContent(`
      <osds-tile ${OdsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-tile>
    `);
    el = await page.find('osds-tile');

    slotContent = await page.find('osds-tile >>> slot:not([name])');
  }

  it('should render', async () => {
    await setup({ attributes: {}, html: `` });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  describe('slots', () => {
    it('should have a slot', async () => {
      await setup();
      expect(slotContent).not.toBeNull();
    });

    it('should display a text in the tile', async () => {
      await setup({ html: '' });

      el.innerHTML = `<osds-tile>text</osds-tile>`;
      await page.waitForChanges();

      expect(el.innerText).toBe('text');
    });
  });
});



