export class NgPabloPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-pablo-app h1')).getText();
  }
}
