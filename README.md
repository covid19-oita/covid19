# 大分県 新型コロナウイルス感染症対策サイト
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

![](https://github.com/covid-oita/covid19/workflows/production%20deploy/badge.svg)

[![大分県 新型コロナウイルス感染症対策サイト](https://user-images.githubusercontent.com/24912801/84268856-52f32580-ab63-11ea-87c5-436bce19ba7d.png)](https://oita.stopcovid19.jp/)

**日本語 | [English](./docs/en/README.md)**

## 貢献の仕方

機能追加や修正に関するやりとりは Issues で行います。
Issues へのコメントはご自由にどうぞ！新しい質問や提案なども受け付けます。
ただし、issue を追加する場合は、同様の issue がないことを必ず確認してください。

Pull Request を送る場合は、対応する issue 番号を概要欄に必ず記載してください。
issue に結びついていない Pull Request は受け付けません。

ほかになにか不明点があれば、[@nojiri1098](https://www.facebook.com/profile.php?id=100025042625404) までご連絡ください。

Code of Conduct は[こちら](./CODE_OF_CONDUCT.md)。

## ライセンス

本ソフトウェアは、[MITライセンス](./LICENSE.txt)の元提供されています。

## 開発者向け情報

### 環境構築の手順

以下のアプリケーションをインストールしてください。

| アプリケーション名 | バージョン | 備考 |
| ------- | ------- | ------- |
| [Node.js](https://nodejs.org/ja/) | 10.19.0以上 | 必須 |
| [VS Code](https://code.visualstudio.com/) | 指定なし | VS Code を利用する場合 |
| [yarn](https://classic.yarnpkg.com/ja/) | 指定なし | 本プログラムを yarn で実行する場合 |
| [docker compose](https://docs.docker.com/compose/install/) | 指定なし | 本プログラムを docker compose で実行する場合 |
| [Vagrant](https://www.vagrantup.com/) | 指定なし | 本プログラムを Vagrant で実行する場合 |

VS Code を利用する場合は、以下の拡張機能をインストールすることをおすすめします。

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)
- [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

実行の手順はそれぞれ以下の通りです。

**yarn を使う場合**
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

`Cannot find module ****` と怒られたときは以下を実行してください。

```bash
$ yarn install
```

**docker compose を使う場合**
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

`Cannot find module ****` と怒られたときは以下を実行してください。

```bash
$ docker-compose run --rm app yarn install
```

**VSCode + Remote Containers で開発する場合**

1. VSCode の拡張機能「[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)」を導入します。
2. [この画像（外部サイト）](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)のように左下部の「Open Folder in Container」でこのリポジトリのルートを選択すれば環境構築が始まります。

設定を変更したい場合は、`.devcontainer/devcontainer.json` を修正してください。
詳細は [devcontainer.json のリファレンス](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference)をご覧ください。

Remote Container 実行時のみ有効な拡張機能「ESLint」を導入していますが、必要に応じて `devcontainer.json` の `extensions` に追加してください。
詳細な手順は[こちら（外部サイト）](https://code.visualstudio.com/docs/remote/containers#_managing-extensions)をご覧ください。

開発環境を再構築する場合は、左下部の「Rebuild Container」を実行します。

### 本番環境/開発環境の判定

本番環境、または開発環境のみで実行したい処理がある場合は、 `process.env.GENERATE_ENV` の値をご利用ください。
この値は、本番環境では `'production'` 、開発環境では `'development'` になっています。

### 本番環境/開発環境への反映

左列のブランチが更新されると、中列のブランチとWebサイトが自動的に更新されます。

| ブランチ | HTML類がbuildされるブランチ | 更新されるWebサイト |
| ---- | ---- | ---- |
| master | production |本番サイト https://oita.stopcovid19.jp/ |
| development | dev-pages | 開発用サイト https://dev-covid19-oita.netlify.app/ |

### ブランチ運用ルール

#### 開発で利用するブランチ

| 目的 | ブランチ | 確認URL | 備考 |
| ---- | -------- | ---- | ---- |
| 本番 | master | https://oita.stopcovid19.jp/ | 管理者以外の Pull Request は禁止です |
| 開発 | development | https://dev-covid19-oita.netlify.app/ | こちらに Pull Requestを送ってください |

#### Webサイトで利用するブランチ

| 目的 | ブランチ | 確認URL |
| ---- | -------- | ---- |
| 本番サイト | production | https://oita.stopcovid19.jp/ |
| 開発サイト | dev-pages | https://dev-covid19-oita.netlify.app/ |

## メディア掲載実績 🎉

- [大分県ホームページ](https://www.pref.oita.jp/site/covid19-oita/): リンクが掲載されました。

- [政府CIOポータル](https://cio.go.jp/node/2581/): 東京都のオープンソースを活用した新型コロナウイルス感染症対策サイトとして紹介されました。

- [TOSテレビ大分](https://www.tostv.jp/emergency/): コンテンツの一部が引用されました。

- [PhotoPRESS COVID-19 Dashboard](https://photopress.jp/covid19-dashboard): コンテンツの一部が引用されました。

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/nojiri1098"><img src="https://github.com/nojiri1098.png" width="100px;" alt=""/><br /><sub><b>Daiki Nojiri</b></sub></a><br /><a href="https://github.com/covid19-oita/covid19/commits?author=nojiri1098" title="Code">💻</a></td>
    <td align="center"><a href="https://twitter.com/varu_3"><img src="https://github.com/varusan.png" width="100px;" alt=""/><br /><sub><b>Subaru Nakamura</b></sub></a><br /><a href="https://github.com/covid19-oita/covid19/commits?author=varusan" title="Code">💻</a></td>
    <td align="center"><a href="https://shmokmt.github.io/"><img src="https://github.com/shmokmt.png" width="100px;" alt=""/><br /><sub><b>Shoma Okamoto</b></sub></a><br /><a href="https://github.com/covid19-oita/covid19/commits?author=shmokmt" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/satetsu"><img src="https://github.com/satetsu.png" width="100px;" alt=""/><br /><sub><b>satetsu</b></sub></a><br /><a href="#business-satetsu" title="Business development">💼</a></td>
    <td align="center"><a href="https://nakaokarei.github.io/my_portfolio"><img src="https://github.com/NakaokaRei.png" width="100px;" alt=""/><br /><sub><b>Nakaoka Rei</b></sub></a><br /><a href="#translation-NakaokaRei" title="Translation">🌍</a></td>
    <td align="center"><a href="https://pnnutkung.github.io/blog"><img src="https://github.com/PNNutkung.png" width="100px;" alt=""/><br /><sub><b>Pipatpol Tanavongchinda</b></sub></a><br /><a href="#translation-PNNutkung" title="Translation">🌍</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/jiprastyo"><img src="https://github.com/jiprastyo.png" width="100px;" alt=""/><br /><sub><b>Prastyo</b></sub></a><br /><a href="#translation-Prastyo" title="Translation">🌍</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
