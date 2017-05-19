import wd from 'wd';

const port = 4723;
const driver = wd.promiseChainRemote('localhost', port);
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

const caps = {
  platformName: 'iOS',
  platformVersion: '10.3',
  deviceName: 'iPhone Simulator',
  app: `${process.cwd()}/ios/build/Build/Products/Release-iphonesimulator/e2etest.app`
};

describe('Simple Appium Example', () => {
  beforeAll(async () => await driver.init(caps));
  afterAll(async () => await driver.quit());

  it('finds the button', async () => {
    expect(await driver.hasElementByName('text1')).toBe(false);
    expect(await driver.hasElementByName('text2')).toBe(false);

    await driver.elementByName('button1').click();
    expect(await driver.hasElementByName('text1')).toBe(true);
    expect(await driver.hasElementByName('text2')).toBe(false);

    await driver.elementByName('button2').click();
    expect(await driver.hasElementByName('text1')).toBe(false);
    expect(await driver.hasElementByName('text2')).toBe(true);
  });
});
