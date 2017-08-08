import { OblogsPage } from './app.po';

describe('oblogs App', () => {
  let page: OblogsPage;

  beforeEach(() => {
    page = new OblogsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
