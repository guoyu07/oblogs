import { OblogsUiPage } from './app.po';

describe('oblogs-ui App', () => {
  let page: OblogsUiPage;

  beforeEach(() => {
    page = new OblogsUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
