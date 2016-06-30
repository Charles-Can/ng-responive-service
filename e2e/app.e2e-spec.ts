import { NgResponiveServicePage } from './app.po';

describe('ng-responive-service App', function() {
  let page: NgResponiveServicePage;

  beforeEach(() => {
    page = new NgResponiveServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
