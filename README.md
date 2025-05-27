# モダンなブログウェブサイト

これは[Next.js](https://nextjs.org)で構築された現代的なブログウェブサイトです。Markdownファイルをベースとしたコンテンツ管理機能を持ち、Azure Static Web Appsにデプロイされています。

## 機能

- Markdownによるブログ投稿管理
- レスポンシブデザイン
- TypeScriptとTailwind CSSによる開発
- Azure Static Web Appsによるホスティング

## 開発ワークフロー

このプロジェクトは、Gitによるバージョン管理とブランチ戦略を採用しています：

1. `develop`ブランチ - 開発用ブランチ。すべての新機能や修正はこのブランチに対して行います。
2. `main`ブランチ - 本番用ブランチ。安定したコードのみがマージされます。

### 作業の流れ

1. 新機能や修正を行う場合は、`develop`ブランチからフィーチャーブランチを作成します。
   ```bash
   git checkout develop
   git checkout -b feature/new-feature-name
   ```

2. 変更を加えてコミットします。
   ```bash
   git add .
   git commit -m "Add new feature: description"
   ```

3. 変更を`develop`ブランチにマージします。
   ```bash
   git checkout develop
   git merge feature/new-feature-name
   git push origin develop
   ```

4. 十分にテストした後、`develop`ブランチから`main`ブランチへプルリクエストを作成し、マージします。
   これにより、GitHub Actionsを通じてAzure Static Web Appsへの自動デプロイが実行されます。

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Azure Static Web Appsへのデプロイ

このプロジェクトはAzure Static Web Appsにデプロイされています。デプロイプロセスは以下の通りです：

1. GitHubリポジトリの`main`ブランチへの変更がプッシュされると、GitHub Actionsが自動的に実行されます。
2. GitHub Actionsにより、Next.jsアプリケーションがビルドされ、Azure Static Web Appsにデプロイされます。

### Azure Static Web Appsの設定

Azure Static Web Appsの設定は`.github/workflows/azure-static-web-apps-brave-smoke-0eb159000.yml`ファイルで管理されています。このファイルには、ビルドとデプロイのプロセスに必要な設定が含まれています。

カスタムドメインの設定や環境変数の追加など、追加の設定はAzureポータルで行うことができます。

詳細については、[Azure Static Web Apps のドキュメント](https://learn.microsoft.com/ja-jp/azure/static-web-apps/)を参照してください。
