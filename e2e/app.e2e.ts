import { NgPabloPage } from './app.po';

describe('ng-pablo App', function() {
  let page: NgPabloPage;

  beforeEach(() => {
    page = new NgPabloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng-pablo works!');
  });
});
