import { FrontRSAPage } from './app.po';

describe('front-rsa App', function() {
  let page: FrontRSAPage;

  beforeEach(() => {
    page = new FrontRSAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
