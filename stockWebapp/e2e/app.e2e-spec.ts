import { StockWebappPage } from './app.po';

describe('stock-webapp App', () => {
  let page: StockWebappPage;

  beforeEach(() => {
    page = new StockWebappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
