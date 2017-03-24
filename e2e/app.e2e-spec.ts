import { UsersDbPage } from './app.po';

describe('users-db App', () => {
  let page: UsersDbPage;

  beforeEach(() => {
    page = new UsersDbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
