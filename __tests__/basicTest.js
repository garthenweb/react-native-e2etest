import wd from 'wd';

const port = 4723;
const driver = wd.promiseChainRemote('localhost', port);
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

// const caps = {
//   platformName: 'iOS',
//   platformVersion: '10.3',
//   deviceName: 'iPhone Simulator',
//   app: `${process.cwd()}/ios/build/Build/Products/Release-iphonesimulator/e2etest.app`
// };

const caps = {
  platformName: 'Android',
  deviceName: 'Android Emulator',
  app: `${process.cwd()}/android/app/build/outputs/apk/app-debug.apk`
};

describe('Simple Appium Example', () => {
  beforeAll(async () => await driver.init(caps));
  afterAll(async () => await driver.quit());

  it('should toggle state', async () => {
    expect(await driver.hasElementByAccessibilityId('text1')).toBe(false);
    expect(await driver.hasElementByAccessibilityId('text2')).toBe(false);

    await driver.elementByAccessibilityId('button1').click();
    expect(await driver.hasElementByAccessibilityId('text1')).toBe(true);
    expect(await driver.hasElementByAccessibilityId('text2')).toBe(false);

    await driver.elementByAccessibilityId('button2').click();
    expect(await driver.hasElementByAccessibilityId('text1')).toBe(false);
    expect(await driver.hasElementByAccessibilityId('text2')).toBe(true);
  });
});
