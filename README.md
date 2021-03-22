# EPGS-to-Twitter: EPGStaionの録画情報をTwitterで呟きます
[![npm version](https://badge.fury.io/js/epgstotwitter.svg)](https://badge.fury.io/js/epgstotwitter)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/iamtakagi/epgs-to-twitter)](https://github.com/iamtakagi/epgs-to-twitter/releases)
[![CI](https://github.com/iamtakagi/epgs-to-twitter/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/iamtakagi/epgs-to-twitter/actions/workflows/ci.yml)
[![Deploy](https://github.com/iamtakagi/epgs-to-twitter/actions/workflows/deploy.yml/badge.svg)](https://github.com/iamtakagi/epgs-to-twitter/actions/workflows/deploy.yml)

## Installation
```console
git clone https://github.com/iamtakagi/EPGS-to-Twitter
cd EPGS-to-Twitter
sudo nano config.sample.json
yarn build
```

`EPGStation/config/config.yml`
```yml
isEnabledDropCheck: true
reserveNewAdditionCommand: '/path/to/node /EPGS-to-Twitter/dist/main.js reserve'
recordingStartCommand: '/path/to/node /EPGS-to-Twitter/dist/main.js start'
recordingFinishCommand: '/path/to/node /EPGS-to-Twitter/dist/main.js end'
```

## Acknowledgments
[advancedbear/EPGS-to-Discord](https://github.com/advancedbear/EPGS-to-Discord)
