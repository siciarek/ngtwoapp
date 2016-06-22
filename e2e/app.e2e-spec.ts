import { NgtwomatPage } from './app.po';

describe('ngtwomat App', function() {
  let page: NgtwomatPage;

  beforeEach(() => {
    page = new NgtwomatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
