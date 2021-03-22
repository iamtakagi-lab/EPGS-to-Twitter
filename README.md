# EPGS-to-Twitter: EPGStaionの録画情報をTwitterでツイートします
[![npm version](https://badge.fury.io/js/epgstotwitter.svg)](https://badge.fury.io/js/epgstotwitter)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/iamtakagi/epgs-to-twitter)](https://github.com/iamtakagi/epgs-to-twitter/releases)
[![CI](https://github.com/iamtakagi/epgs-to-twitter/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/iamtakagi/epgs-to-twitter/actions/workflows/ci.yml)
[![Deploy](https://github.com/iamtakagi/epgs-to-twitter/actions/workflows/deploy.yml/badge.svg)](https://github.com/iamtakagi/epgs-to-twitter/actions/workflows/deploy.yml)

## 設定例
`EPGStation/config/config.yml`
```yml
isEnabledDropCheck: true
reserveNewAdditionCommand: '/usr/local/bin/node /EPGS-to-Twitter/dist/main.js reserve'
recordingStartCommand: '/usr/local/bin/node /EPGS-to-Twitter/dist/main.js start'
recordingFinishCommand: '/usr/local/bin/node /EPGS-to-Twitter/dist/main.js end'
```

## 開発参考
https://github.com/advancedbear/EPGS-to-Discord
