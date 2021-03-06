# EPGS-to-Twitter: EPGStationの録画情報をTwitterで呟きます
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/iamtakagi/epgs-to-twitter)](https://github.com/iamtakagi/epgs-to-twitter/releases)
[![CI](https://github.com/iamtakagi/epgs-to-twitter/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/iamtakagi/epgs-to-twitter/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/iamtakagi/epgs-to-twitter)](https://github.com/iamtakagi/epgs-to-twitter/blob/master/LICENSE)
[![issues](https://img.shields.io/github/issues/iamtakagi/epgs-to-twitter)](https://github.com/iamtakagi/epgs-to-twitter/issues)
[![pull requests](https://img.shields.io/github/issues-pr/iamtakagi/epgs-to-twitter)](https://github.com/epgs-to-twitter/pulls)

## Installation
```console
git clone https://github.com/iamtakagi/EPGS-to-Twitter
cd EPGS-to-Twitter
nano config.sample.json
yarn
yarn build
```

`EPGStation/config/config.yml`
```yml
isEnabledDropCheck: true
reserveNewAddtionCommand: '/path/to/node /EPGS-to-Twitter/dist/main.js reserve'
recordingStartCommand: '/path/to/node /EPGS-to-Twitter/dist/main.js start'
recordingFinishCommand: '/path/to/node /EPGS-to-Twitter/dist/main.js finish'
```

## Acknowledgments
- [advancedbear/EPGS-to-Discord](https://github.com/advancedbear/EPGS-to-Discord)
- [l3tnun/EPGStation](https://github.com/l3tnun/EPGStation)
  - [EPGStation/conf-manual#外部コマンド実行](https://github.com/l3tnun/EPGStation/blob/master/doc/conf-manual.md#%E5%A4%96%E9%83%A8%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E5%AE%9F%E8%A1%8C)
