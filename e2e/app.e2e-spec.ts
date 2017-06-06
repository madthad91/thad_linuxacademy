import { LinuxacademyPage } from './app.po';

describe('linuxacademy App', () => {
  let page: LinuxacademyPage;

  beforeEach(() => {
    page = new LinuxacademyPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
