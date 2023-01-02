---
marp: true
paginate: true
theme: gaia
header: "**Lightning Web Components** __について__"
footer: "by **＠tkonishi**"
---

<!-- _paginate: false -->

<!-- ![w:2000](https://www.nearpartner.com/wp-content/uploads/2019/02/LWC-salesforce.png) -->

# Lightning Web Componets について <!-- fit -->

</br>
</br>

![Slides are here](images/qrcode.png)

##### スライド:https://powerninja.github.io/SSCLWC/ja/index.html

##### リポジトリ:https://github.com/powerninja/SSCLWC

---

# はじめに

<!-- Lightning Web Componentsは、apexやvisualforceと違いsalesforce独特ではなく、web標準に基づいている。-->

- summmer19 に登場し、はや 3 年半立ちました。
  (当時自分はいませんでした 😅)
- フロントの開発では、Aura や visualforce よりも選択される機会が増えてきていると思うので、少しづつ始めてみましょう!:smile::+1:

---

# トピックス

1. salesforce における画面開発の種類
2. Lightning Web Components とは
3. なぜ Lightning Web Components を選択するのか
4. Lightning Web Components と Aura の違い → いらない？

---

# salesforce における画面開発の種類

- 画面フロー
  - フローで実現可能な場合こちらをチョイス
- visualforce
  - jsp 風開発
- Aura
  - 基本は使用しない
- **Lightning Web Components**
  - WEB 標準な開発

---

# salesfoce における画面開発

- フローが使えないので、絵で書く？

---

# なぜ Lightning Web Components を選択するのか

1. ミリ単位の調整
2. 外部ライブラリの使用
3. javascript 開発に慣れている

---

## Markdown 例

```markdown
---
marp: true
paginate: true
---

<!-- _paginate: false -->

# About [Marp CLI Action](https://github.com/KoharaKazuya/marp-cli-action) <!-- fit -->

---

## [Marp CLI Action](https://github.com/KoharaKazuya/marp-cli-action) is...
```

[このスライドのソース](https://github.com/KoharaKazuya/marp-cli-action/blob/main/examples/ja/about-marp-cli-action.md) を参照してください。

---

## "Marp CLI Action" は何を提供するの？

GitHub Action として [Marp CLI](https://github.com/marp-team/marp-cli) を実行します。

リポジトリ内の Markdown ファイルから HTML、PDF、PowerPoint、画像を生成の自動化を素早く簡単にセットアップできます。

---

## 使い方

1. ワークフローに以下を追加します

```yaml
- uses: KoharaKazuya/marp-cli-action@v1
```

または

1. [このテンプレート](https://github.com/KoharaKazuya/marp-cli-action-gh-pages-template) を使用し、リポジトリを作成します
2. Marp の Markdown を書きます
3. コミットし、プッシュします

_Marp CLI Action は Markdown からファイルを生成するのみです。アップロード、リリース、公開などをしたい場合は他のアクションを使いましょう。_

---

## オプション

[`action.yml`](https://github.com/KoharaKazuya/marp-cli-action/blob/main/action.yml) の `inputs` セクションを参照してください。

Marp CLI をカスタマイズするには [`marp.config.json`、`marp.config.cjs`、`.marprc` といった Marp CLI の設定ファイル](https://github.com/marp-team/marp-cli/blob/master/README.md#configuration-file) を使用してください。

設定ファイルはリポジトリルートに置くか、`config-file` input を指定します。

_日本語ユーザーへ; Marp CLI オプションとして `lang: ja-JP` を指定してください。そうした場合、Marp CLI Action は CJK フォント問題を修正します。_

---

# 楽しくスライドを書こう！ :v: <!--fit-->
