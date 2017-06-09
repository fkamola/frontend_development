import { BeersProjectPage } from './app.po';

describe('beers-project App', () => {
  let page: BeersProjectPage;

  beforeEach(() => {
    page = new BeersProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
