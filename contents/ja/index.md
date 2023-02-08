---
title: Lightning Web Componets について
marp: true
paginate: true
theme: freud


---

<!-- _paginate: false -->
<!-- theme: gradient class: blue-->
<!-- theme: freud class: blue-->


# Lightning Web Componets について <!-- fit -->
</br>
</br>

![Slides are here](images/qrcode.png)
##### スライド:https://powerninja.github.io/SSCLWC/ja/index.html

##### リポジトリ:https://github.com/powerninja/SSCLWC

---

# はじめに
#### 今回の質問内容
> ・ Lightning Web コンポーネント（＝LWC？auraとwebは何が違う？）
- Lightning Web Componentsの簡単な説明とAuraとの比較を行います
- 今回 Lightning Web Components の開発を行うための環境構築等の詳細な説明はしません
---

# トピックス

1. Salesforce における画面開発の歴史
2. Lightning Web Components と Aura の違いは？
3. なぜ Lightning Web Components を選択するのか
4. LWCを使用した案件紹介
5. 作成した Lightning Web Components の紹介
6. おまけ

---
# Salesforce における画面開発の歴史
- Visualforce
  - Summer '08 くらい？
- Lightning Aura Components
  - Auraと記載される
  - 2014くらいに発表？
- Lightning Web Components
  - LWCと記載される
  - Summmer '19
---

# Lightning Web Components と Aura の違いは？
- 共通点
  - Saleforce上での見た目はほぼ同じ([LDS](https://www.lightningdesignsystem.com/)を標準で使用)
  - classic未対応
  - HTMLとJavaScriptを用いた開発
  - 外部 JavaScript ライブラリの[使用可能](https://qiita.com/stomita/items/2cfa4db77c543f47d33c)(静的リソースで読み込ませる)
  - [Tailwind CSS](https://tailwindcss.com/)のようにクラス名でスタイルを与えることができる
    - そのため、LDSでよければCSSファイルは不要
---
# Lightning Web Components と Aura の違いは？
- 相違点
  - Auraは開発者コンソールで作成可能だが、LWCはVisual Studio Codeが必要(chromeの拡張機能で開発は可能)
  - LWCはユニットテスト[Jest](https://jestjs.io/ja/)に対応している
  - LWCで対応していない機能がまだある、その場合はAuraを使用する必要あり(一部モバイル対応など)
  - Auraは開発がアーカイブ化されている(サポートはしている)
[Aura開発リポジトリ](https://github.com/forcedotcom/aura)
[LWC開発リポジトリ](https://github.com/salesforce/lwc)
---
# Lightning Web Components と Aura の違いは？
- Visualforceとの比較
  - 共通点
    - あまりない
  - 相違点
    - コントローラーがLWCはJavaScript(ブラウザ動作),Visualforceとの比較はApex(サーバ動作)
      そのため、LWCのパフォーマンスが良い
---
# Lightning Web Components と Aura の違いは？
- 画面フローとの比較
  - 画面フローで実装可能な場合画面フローを使用することが望ましい
  - ただ、ソースレビューを行いたい場合や、マージリクエストベース開発を行いたい場合はLWCの方がスムーズに開発を行える
  - ブラウザの機能(localStorageなど)を使用したい場合はLWCを使用することになる
---
# なぜ Lightning Web Components を選択するのか
- Aura
  - アーカイブ化されている(そのうちプロセスビルダーのように廃止されるかも？)
- Visualforce
  - web標準のHTMLではない
  - コントローラーがApexのためパフォーマンスが良くない
- Lightning Web Components
  - 今から学習するのであれば、消去法でLWCが良い

---

# なぜ Lightning Web Components を選択するのか

- 開発コミュニティが活発なため、新機能などに期待できる
- 標準的なJavaScriptを使用することができるため、JavaScriptの開発経験がある方は開発しやすい
  - そのため、学習コストが低い & Web開発を行う際に役立つかも？
- LWC開発時に必要なファイルの数が少なく、初期段階の理解が早い(個人差あり)
- (Aura,Visualforceと比べると)パフォーマンスが良い

---
# なぜ Lightning Web Components を選択するのか
- LWCで作成されるファイル数
```markdown
プロジェクト名(任意で設定可能)
 ├ HTML
 ├ JavaScript
 ├ xml
 ├ css(任意)
 └ Jestフォルダ
    └ プロジェクト名.test.js
```
---
# なぜ Lightning Web Components を選択するのか
- Auraで作成されるファイル数
  - 全部が必要なわけではないが。。。
```markdown
プロジェクト名(任意で設定可能)
 ├ auradoc
 ├ cmp(HTML)
 ├ cmp-meta.xml
 ├ css
 ├ design
 ├ svg
 ├ Controller.js
 ├ Helper.js
 └ Render.js
 ```
---
# なぜ Lightning Web Components を選択するのか
```html
<template>
    <div slds-p-left_xx-large>{hello}</div>
</template>
```
```JavaScript
import { LightningElement } from 'lwc';

export default class Test extends LightningElement {
  hello = 'Hello,World!'
}
```
```xml
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>56.0</apiVersion>
    <isExposed>true</isExposed>
</LightningComponentBundle>
```

---
# LWCを使用した案件紹介
1. Experience CloudにB to C と B to B 向けのWebページを開発
  - B to C のページは独自のデザインだったため、CSSを使用していた
  - B to B の方はLDSだったが、ソースレビューやGitHubで管理を行いたかったためLWCで開発をおこなった
2. ルックアップ検索条件に表示されるレコードの条件を変更したい
  - 画面フローでは実装不可だったためLWCを使用した
  - その後、保存ボタンを動的に動かしたり、項目全て入力されたら保存ボタンの色を変えたりと色々した

---
# 作成した Lightning Web Components の紹介
- 勉強会の環境に一部デプロイあり


---
# おまけ
- LWCはSalesforce の外でも使用することが可能
- [lwc.dev](https://lwc.dev/)というwebページがあり、こちらに詳細が記載されている。
- Herokuやwebサーバーにデプロイすることで使用可能
- Salesforceと関係が一切ないがメインのHTMLとJavaScriptの書き方はほぼ同じ
- 興味のある方は「OSS LWC」などで検索してみてください
