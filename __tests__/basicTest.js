import wd from 'wd'

let port = 4723
let driver = wd.promiseChainRemote('localhost', port)
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000

const caps = {
  platformName: "iOS",
  platformVersion: "10.3",
  deviceName: "iPhone Simulator",
  app: "/Users/gantman/Documents/Projects/rn/react-native-e2etest/ios/build/Build/Products/Debug-iphonesimulator/e2etest.app"
}

describe('Simple Appium Example', () => {
  let allPassed = true

  // Initialize driver
  beforeAll(() => {
    driver.init(caps)
  })

  // Finish after everything is done
  afterAll(() => {
    return driver
      .quit()
      .finally(() => console.log('After All Called'))
  })

  it('finds the button', () => {
    return driver
      .sleep(25000)
      .elementByName('button1').click()
      .sleep(2000)
      .elementByName('button2').click()
      .sleep(2000)
  })
})