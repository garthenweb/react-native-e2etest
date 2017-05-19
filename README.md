# Appium install

Download Appium app from http://appium.io/downloads.html

https://github.com/appium/appium/blob/master/docs/en/appium-setup/running-on-osx.md

``` bash
npm install -g appium
npm install -g appium-doctor
npm install --save-dev wd
brew install carthage
export JAVA_HOME="$(/usr/libexec/java_home)"
export PATH=${JAVA_HOME}/bin:$PATH
```

## run

``` bash
appium & react-native run-ios --configuration Release && npm test
```
