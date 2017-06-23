import { ResiliencePage } from './app.po';

describe('resilience App', () => {
  let page: ResiliencePage;

  beforeEach(() => {
    page = new ResiliencePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
