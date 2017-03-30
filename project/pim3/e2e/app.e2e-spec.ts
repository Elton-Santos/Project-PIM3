import { NahyPage } from './app.po';

describe('nahy App', () => {
  let page: NahyPage;

  beforeEach(() => {
    page = new NahyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
