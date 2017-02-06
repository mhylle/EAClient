import { EAClientPage } from './app.po';

describe('eaclient App', function() {
  let page: EAClientPage;

  beforeEach(() => {
    page = new EAClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
