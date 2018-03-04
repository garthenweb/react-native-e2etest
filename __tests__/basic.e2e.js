import wd from 'wd';
import config from '../e2e-config';

const port = 4723;
const driver = wd.promiseChainRemote('localhost', port);
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

describe('Simple Appium Example', () => {
  beforeAll(async () => await driver.init(config));
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

  it('should find text by scrolling', async () => {
    expect(await driver.hasElementByAccessibilityId('text3')).toBe(false);
    const FAST = 2;
    await driver.flick(0, -1000, FAST)

    expect(await driver.hasElementByAccessibilityId('text3')).toBe(true);
  });
});
