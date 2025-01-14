import type { OdsPaginationAttribute } from './interfaces/attributes';
import type { OdsPaginationChangedEventDetail } from './interfaces/events';
import type { E2EElement, E2EPage } from '@stencil/core/testing';

import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_PAGINATION_PER_PAGE_OPTIONS } from './constants/pagination-per-page';



describe('e2e:osds-pagination', () => {
  const baseAttribute = { current: 0, disabled: false, labelTooltipNext: '', labelTooltipPrevious: '', totalPages: 0 };
  let page: E2EPage;
  let el: E2EElement;
  let osdsButtonPaginationPageButtonElement: E2EElement;

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsPaginationAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsPaginationAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();

    await page.setContent(`
      <osds-pagination ${odsStringAttributes2Str(stringAttributes)}>
        ${html}
      </osds-pagination>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-pagination');
  }

  describe('defaults', () => {
    beforeEach(async() => {
      await setup({ attributes: { totalPages: 10, current: 4 } });
    });

    it('should render', async() => {
      expect(el).not.toBeNull();
      expect(el).toHaveClass('hydrated');
    });

    it('should have arrows, right and left', async() => {
      // we list the buttons of arrows
      const allArrows = await page.findAll('osds-pagination >>> .arrows >>> osds-button');
      expect(allArrows).toBeTruthy();
      // we should have two arrows, right and left
      expect(allArrows.length).toBe(2);
    });

    it('should have page list with osds-buttons', async() => {
      osdsButtonPaginationPageButtonElement = await page.find('osds-pagination >>> ul > li > osds-button');
      expect(osdsButtonPaginationPageButtonElement).not.toBeNull();
    });

    it('arrows should have osds-icons', async() => {
      const icons = await page.find('osds-pagination >>> ul > li > osds-button >>> osds-icons');
      expect(icons).not.toBeNull();
    });
  });

  describe('check the pagination structure', () => {
    it('should not render if total pages is less than 2', async() => {
      await setup({ attributes: { current: 1, totalPages: 1 } });
      expect(el.shadowRoot.innerHTML).toBe('');
    });

    it('< 1 2 > should have 4 osds-button', async() => {
      await setup({ attributes: { current: 1, totalPages: 2 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');
      expect(buttonList.length).toBe(4);
    });

    it('< 1 2 3 > should have 5 osds-button', async() => {
      await setup({ attributes: { current: 1, totalPages: 3 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');
      expect(buttonList.length).toBe(5);
    });

    it('< 1 2 3 4 > should have 6 osds-button', async() => {
      await setup({ attributes: { current: 1, totalPages: 4 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');
      expect(buttonList.length).toBe(6);
    });

    it('< 1 2 3 4 5 > should have 7 osds-button', async() => {
      await setup({ attributes: { current: 1, totalPages: 5 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');
      expect(buttonList.length).toBe(7);
    });

    it('< 1 2 3 4 5 6 > should have 8 osds-button', async() => {
      await setup({ attributes: { current: 1, totalPages: 6 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');
      expect(buttonList.length).toBe(8);
    });

    it('< 1 2 3 4 5 … 7 > should have 9 osds-button', async() => {
      await setup({ attributes: { current: 1, totalPages: 7 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');
      expect(buttonList.length).toBe(9);
    });

    it('< 1 2 3 4 5 … 8 > should have 9 osds-button', async() => {
      await setup({ attributes: { current: 1, totalPages: 8 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');
      expect(buttonList.length).toBe(9);
    });

    it('< 1 … 4 5 6 … 21 > should have 9 osds-button', async() => {
      await setup({ attributes: { current: 5, totalPages: 21 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');
      expect(buttonList.length).toBe(9);
    });

    it('< 1 … 4 5 6 … 9000 > should have 9 osds-button', async() => {
      await setup({ attributes: { current: 5, totalPages: 9000 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');
      expect(buttonList.length).toBe(9);
    });
  });

  describe('should change page if we click', () => {
    it('current from 2 to 1 by button click', async() => {
      await setup({ attributes: { current: 2, totalPages: 5 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');

      const indexBeforeClick = Number(el.getAttribute('current'));
      expect(indexBeforeClick).toEqual(2);

      await buttonList[1].click();

      await page.waitForChanges();

      const current = Number(el.getAttribute('current'));
      expect(current).toEqual(1);
    });

    it('current from 2 to 3 by button click', async() => {
      await setup({ attributes: { current: 2, totalPages: 5 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');

      const indexBeforeClick = Number(el.getAttribute('current'));
      expect(indexBeforeClick).toEqual(2);

      await buttonList[3].click();

      await page.waitForChanges();

      const current = Number(el.getAttribute('current'));
      expect(current).toEqual(3);
    });

    it('current from 2 to 4 by button click', async() => {
      await setup({ attributes: { current: 2, totalPages: 5 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');

      const indexBeforeClick = Number(el.getAttribute('current'));
      expect(indexBeforeClick).toEqual(2);

      await buttonList[4].click();

      await page.waitForChanges();

      const current = Number(el.getAttribute('current'));
      expect(current).toEqual(4);
    });

    it('current from 2 to 5 by button click', async() => {
      await setup({ attributes: { current: 2, totalPages: 5 } });

      const buttonList = await page.findAll('osds-pagination >>> li >>> osds-button');

      const indexBeforeClick = Number(el.getAttribute('current'));
      expect(indexBeforeClick).toEqual(2);

      await buttonList[5].click();

      await page.waitForChanges();

      const current = Number(el.getAttribute('current'));
      expect(current).toEqual(5);
    });

    it('should emit when the attribute changes', async() => {
      await setup({ attributes: { current: 2, totalPages: 5 } });

      const odsPaginationChanged = await el.spyOnEvent('odsPaginationChanged');

      el.setAttribute('current', 5);

      await page.waitForChanges();

      const expected: OdsPaginationChangedEventDetail = {
        oldCurrent: 2,
        current: 5,
      };

      expect(odsPaginationChanged).toHaveReceivedEventDetail(expected);
      expect(odsPaginationChanged).toHaveReceivedEventTimes(1);
    });
  });

  describe('render with totalItems set', () => {
    let perPageSelectElement: E2EElement;

    it('should not show the select if the totalItems < 10', async() => {
      await setup({ attributes: { current: 1, totalItems: 5 } });

      perPageSelectElement = await page.find('osds-pagination >>> osds-select');

      expect(perPageSelectElement).toBe(null);
    });

    it('should show all the default step', async() => {
      await setup({ attributes: { current: 1, totalItems: 500 } });

      perPageSelectElement = await page.find('osds-pagination >>> osds-select');
      expect(perPageSelectElement).toBeDefined();
      expect(perPageSelectElement.getAttribute('value')).toBe(ODS_PAGINATION_PER_PAGE_OPTIONS[0].toString());

      const perPageSelectItemElements = await perPageSelectElement.findAll('osds-select-option');
      expect(perPageSelectItemElements.length).toBe(ODS_PAGINATION_PER_PAGE_OPTIONS.length);

      const selectValues = perPageSelectItemElements
        .map((el) => el.getAttribute('value'))
        .map((attr) => parseInt(attr, 10));
      expect(selectValues).toEqual(ODS_PAGINATION_PER_PAGE_OPTIONS);
    });
  });

  // FIXME seems like testing slot text content is not possible for now as assignedNodes function is not available
  //  (see https://github.com/ionic-team/stencil/issues/2830)
  describe('render with total items slots set', () => {
    const dummyTotalItems = 5;

    it('should show both slots and the totalItems number', async() => {
      await setup({
        attributes: { current: 1, totalItems: dummyTotalItems },
        html: `
          <span slot="before-total-items">of&nbsp;</span>
          <span slot="after-total-items">&nbsp;results</span>
        `,
      });

      const totalItemsTextElement = await page.find('osds-pagination >>> osds-text');
      expect(totalItemsTextElement).toBeDefined();
      expect(totalItemsTextElement.innerText).toBe(dummyTotalItems.toString());

      const textSlotElements = await totalItemsTextElement.findAll('slot');
      expect(textSlotElements.length).toBe(2);
    });
  });

  describe('per page change', () => {
    let pageItemElements: E2EElement[];

    it('should change the totalPages according to the selected step', async() => {
      await setup({ attributes: { current: 1, totalItems: 20 } });

      pageItemElements = await page.findAll('osds-pagination >>> ul > li:not([class="arrows"])');
      expect(pageItemElements.length).toBe(2);

      const selectElement = await page.find('osds-pagination >>> osds-select');
      selectElement.setProperty('value', 20);
      await page.waitForChanges();

      pageItemElements = await page.findAll('osds-pagination >>> ul > li:not([class="arrows"])');
      expect(pageItemElements.length).toBe(1);
    });
  });
});
