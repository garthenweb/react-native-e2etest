# React Native e2e Test Example

This is an example application to execute end to end tests for react native with [appium](https://github.com/appium/appium) and [jest](https://facebook.github.io/jest/). 

## Setup

To run tests with appium you first need to spawn a server your web driver is able to talk with.

The server is written in node.js and is installable via [npm](https://www.npmjs.com/package/appium). There is also a [desktop application](http://appium.io/downloads.html) that provides a user interface for more debugging options. For this example we are using the simple appium server.

You can write test in a lot of different languages, there are web drivers in Java, Python and Ruby. For this example we will stay with JavaScript.

The best way to find out whether you local setup is ready to run tests is to install [appium-doctor](https://www.npmjs.com/package/appium-doctor) globally and check if all requirements are met by running it.

In my case on OSX I needed to install [carthage](https://github.com/Carthage/Carthage) and expose the JAVA_HOME environment.

``` bash
brew install carthage
export JAVA_HOME="$(/usr/libexec/java_home)"
export PATH=${JAVA_HOME}/bin:$PATH
```

You can find further information for your platform of choice:

* [OSX](https://github.com/appium/appium/blob/master/docs/en/appium-setup/running-on-osx.md)
* [Windows](https://github.com/appium/appium/blob/master/docs/en/appium-setup/running-on-windows.md)
* [Linux](https://github.com/appium/appium/blob/master/docs/en/appium-setup/running-on-linux.md)

## Run Android E2E Test

0. install JavaScript dependencies via `npm install`
1. open an Android emulator (Appium will pick the first emulator it can find)
2. build the app via `./gradlew assembleRelease` in the `android` folder
3. start the appium server via `npm run start:appium` or open the desktop application
4. start the e2e test via `npm run test:e2e:android`

## Run iOS E2E Test

0. install JavaScript dependencies via `npm install`
1. build the app via `react-native run-ios --configuration Release`
2. start the appium server via `npm run start:appium` or open the desktop application
3. start the e2e test via `npm run test:e2e:ios`

## `accessibilityLabel` vs. `testID`

The best way to query for components on your react native app would normally be the `testID` property because it was build for exactly that purpose.

The issue with the `testID` is, that it is not supported on Android. You can find the discussion about it on [Github](https://github.com/facebook/react-native/pull/9942).

Long story short: The PR that introduces `testID` for android would require lots of changes in Facebook internals. They are thinking about introducing an e2e testing framework especially for react native as they are using internal, but no one knows when this might happen.

The `accessibilityLabel` is the best property to exposes queryable information in Android and iOS. The downside is, it's visible to the user (at least if he/she is using accessibility tools to query this information). That said, you should define proper labels so users with accessibility tools aren't confused by your selectors.