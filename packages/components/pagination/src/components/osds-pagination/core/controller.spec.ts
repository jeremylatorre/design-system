import type { OdsPaginationPageList } from '../interfaces/attributes';

import { OdsLogger } from '@ovhcloud/ods-common-core';
import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-common-testing';

import { OdsPaginationController } from './controller';
import { OsdsPagination } from '../osds-pagination';


class OdsPaginationMock extends OsdsPagination {
  constructor(attribute: Partial<OsdsPagination>) {
    super();
    Object.assign(this, attribute);
  }
}

describe('spec:ods-pagination-controller', () => {
  let controller: OdsPaginationController;
  let component: OsdsPagination;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  function setup(attributes: Partial<OsdsPagination> = {}) {
    component = new OdsPaginationMock(attributes);
    controller = new OdsPaginationController(component);
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OdsPaginationController,
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  describe('methods', () => {
    describe('computeActualTotalPages', () => {
      const dummyItemPerPage = 10;

      it('should return totalPages if totalItems is not defined', () => {
        const dummyTotalPages = 8;
        setup({ disabled: false, current: 2, totalPages: dummyTotalPages });

        expect(controller.computeActualTotalPages(dummyItemPerPage)).toBe(dummyTotalPages);
      });

      it('should return the correct amount of pages if totalItems is defined', () => {
        setup({ disabled: false, current: 2, totalItems: 33, totalPages: 1 });
        expect(controller.computeActualTotalPages(dummyItemPerPage)).toBe(4);

        setup({ disabled: false, current: 2, totalItems: 9, totalPages: 1 });
        expect(controller.computeActualTotalPages(dummyItemPerPage)).toBe(1);

        setup({ disabled: false, current: 2, totalItems: 9, totalPages: 1 });
        expect(controller.computeActualTotalPages(0)).toBe(9);
      });
    });

    describe('createPageList', () => {
      it('should generate the correct number of pages', () => {
        setup({ disabled: false, current: 2, totalPages: 8 });

        const pageList = controller.createPageList(component.totalPages, component.current);

        expect(pageList).toHaveLength(8);
      });

      it('should generate the correct page list', () => {
        setup({ disabled: false, current: 2, totalPages: 9 });

        const pageList: OdsPaginationPageList = controller.createPageList(component.totalPages, component.current);

        expect(pageList).toHaveLength(9);
      });

      it('should display the correct page list following to the current page 5', () => {
        setup({ disabled: false, current: 5, totalPages: 12 });

        const pageList: OdsPaginationPageList = controller.createPageList(component.totalPages, component.current);

        expect(pageList).toHaveLength(12);
        expect(pageList[0].active).toBe(true);
        expect(pageList[1].active).toBe(false);
        expect(pageList[2].active).toBe(false);
        expect(pageList[3].active).toBe(true);
        expect(pageList[4].active).toBe(true);
        expect(pageList[5].active).toBe(true);
        expect(pageList[6].active).toBe(false);
        expect(pageList[7].active).toBe(false);
        expect(pageList[8].active).toBe(false);
        expect(pageList[9].active).toBe(false);
        expect(pageList[10].active).toBe(false);
        expect(pageList[11].active).toBe(true);
      });

      it('should display the correct page list following to the current page 2', () => {
        setup({ disabled: false, current: 2, totalPages: 9 });

        const pageList: OdsPaginationPageList = controller.createPageList(component.totalPages, component.current);

        expect(pageList).toHaveLength(9);
        expect(pageList[0].active).toBe(true);
        expect(pageList[1].active).toBe(true);
        expect(pageList[2].active).toBe(true);
        expect(pageList[3].active).toBe(true);
        expect(pageList[4].active).toBe(true);
        expect(pageList[5].active).toBe(false);
        expect(pageList[6].active).toBe(false);
        expect(pageList[7].active).toBe(false);
        expect(pageList[8].active).toBe(true);
      });

      it('should display the correct page list following to the current page 3', () => {
        setup({ disabled: false, current: 3, totalPages: 9 });

        const pageList: OdsPaginationPageList = controller.createPageList(component.totalPages, component.current);

        expect(pageList).toHaveLength(9);
        expect(pageList[0].active).toBe(true);
        expect(pageList[1].active).toBe(true);
        expect(pageList[2].active).toBe(true);
        expect(pageList[3].active).toBe(true);
        expect(pageList[4].active).toBe(true);
        expect(pageList[5].active).toBe(false);
        expect(pageList[6].active).toBe(false);
        expect(pageList[7].active).toBe(false);
        expect(pageList[8].active).toBe(true);
      });

      it('should display the correct page list following to the current page 4', () => {
        setup({ disabled: false, current: 4, totalPages: 9 });

        const pageList: OdsPaginationPageList = controller.createPageList(component.totalPages, component.current);

        expect(pageList).toHaveLength(9);
        expect(pageList[0].active).toBe(true);
        expect(pageList[1].active).toBe(true);
        expect(pageList[2].active).toBe(true);
        expect(pageList[3].active).toBe(true);
        expect(pageList[4].active).toBe(true);
        expect(pageList[5].active).toBe(false);
        expect(pageList[6].active).toBe(false);
        expect(pageList[7].active).toBe(false);
        expect(pageList[8].active).toBe(true);
      });

      it('all pages should be active if there are 5 pages', () => {
        setup({ disabled: false, current: 4, totalPages: 5 });

        const pageList: OdsPaginationPageList = controller.createPageList(component.totalPages, component.current);

        expect(pageList).toHaveLength(5);
        expect(pageList[0].active).toBe(true);
        expect(pageList[1].active).toBe(true);
        expect(pageList[2].active).toBe(true);
        expect(pageList[3].active).toBe(true);
        expect(pageList[4].active).toBe(true);
      });

      it('should display the last 5 pages if page 9 on 9 is selected', () => {
        setup({ disabled: false, current: 9, totalPages: 9 });

        const pageList: OdsPaginationPageList = controller.createPageList(component.totalPages, component.current);

        expect(pageList).toHaveLength(9);
        expect(pageList[0].active).toBe(true);
        expect(pageList[1].active).toBe(false);
        expect(pageList[2].active).toBe(false);
        expect(pageList[3].active).toBe(false);
        expect(pageList[4].active).toBe(true);
        expect(pageList[5].active).toBe(true);
        expect(pageList[6].active).toBe(true);
        expect(pageList[7].active).toBe(true);
        expect(pageList[8].active).toBe(true);
      });

      it('set page to 5 with setPageIndex', () => {
        setup({ disabled: false, current: 10, totalPages: 12 });
        expect(component.current).toBe(10);

        controller.setPageIndex(5);
        expect(component.current).toBe(5);
      });

      it('handlePreviousKeyDown', () => {
        setup({ disabled: false, current: 10, totalPages: 12 });
        expect(component.current).toBe(10);

        const event = new KeyboardEvent('keyDown', { code: 'Space', bubbles: true });
        controller.handlePreviousKeyDown(event, component.current);
        expect(component.current).toBe(9);
      });

      it('handlePageKeyDown', () => {
        setup({ disabled: false, current: 10, totalPages: 12 });

        const pageList: OdsPaginationPageList = controller.createPageList(component.totalPages, component.current);
        expect(component.current).toBe(10);

        const event = new KeyboardEvent('keyDown', { code: 'Space', bubbles: true });
        controller.handleNextKeyDown(event, component.current, pageList);
        expect(component.current).toBe(11);
      });

      it('handlePageKeyDown on page 5', () => {
        setup({ disabled: false, current: 10, totalPages: 12 });
        expect(component.current).toBe(10);

        const event = new KeyboardEvent('keyDown', { code: 'Space', bubbles: true });

        controller.handlePageKeyDown(event, 6);
        expect(component.current).toBe(6);
        controller.handlePageKeyDown(event, 7);
        expect(component.current).toBe(7);
        controller.handlePageKeyDown(event, 8);
        expect(component.current).toBe(8);
        controller.handlePageKeyDown(event, 9);
        expect(component.current).toBe(9);
        controller.handlePageKeyDown(event, 10);
        expect(component.current).toBe(10);
        controller.handlePageKeyDown(event, 11);
        expect(component.current).toBe(11);
        controller.handlePageKeyDown(event, 12);
        expect(component.current).toBe(12);
      });

      it('handlePreviousClick', () => {
        setup({ disabled: false, current: 10, totalPages: 12 });

        expect(component.current).toBe(10);
        controller.handlePreviousClick(component.current);
        expect(component.current).toBe(9);
        controller.handlePreviousClick(component.current);
        expect(component.current).toBe(8);
      });

      it('handleNextClick', () => {
        setup({ disabled: false, current: 10, totalPages: 12 });

        expect(component.current).toBe(10);
        controller.handleNextClick(component.current);
        expect(component.current).toBe(11);
        controller.handleNextClick(component.current);
        expect(component.current).toBe(12);
      });

      it('handlePageClick', () => {
        setup({ disabled: false, current: 10, totalPages: 12 });

        expect(component.current).toBe(10);
        controller.handlePageClick(1);
        expect(component.current).toBe(1);
        controller.handlePageClick(3);
        expect(component.current).toBe(3);
      });
    });
  });
});
