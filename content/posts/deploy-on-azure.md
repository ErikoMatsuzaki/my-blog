---
title: "Azure上でのデプロイ方法"
excerpt: "Next.jsで作成したブログサイトをAzureの無料枠でデプロイする方法を解説します。"
date: "2025-05-25"
category: "IT技術"
coverImage: "/globe.svg"
author: "ブログ管理人"
---

# Azure上でのNext.jsアプリケーションのデプロイ方法

このブログサイトはAzureの無料枠を使ってデプロイしています。この記事では、その方法を解説します。

## Azureの無料枠について

Azureでは、App ServiceやStatic Web Appsなど、いくつかのサービスで無料枠が提供されています。
今回はStatic Web Appsを使用して、Next.jsアプリケーションをデプロイします。

## デプロイ手順

### 1. GitHubリポジトリの準備

まず、ブログのコードをGitHubリポジトリにプッシュします。

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <リポジトリのURL>
git push -u origin main
```

### 2. Azureポータルでの設定

1. Azureポータル（https://portal.azure.com/）にログイン
2. 「リソースの作成」→「Static Web App」を選択
3. 基本情報を入力（リソースグループ、名前、リージョンなど）
4. GitHubアカウントと連携し、リポジトリを選択
5. ビルド設定で「Next.js」を選択
6. 「確認と作成」→「作成」をクリック

### 3. GitHub Actionsの設定

GitHubリポジトリにワークフローファイルが自動的に追加されます。必要に応じて、このファイルをカスタマイズします。

### 4. デプロイの確認

数分後、デプロイが完了し、表示されたURLでサイトにアクセスできるようになります。

## 注意点

- Next.jsの一部の機能（サーバーサイドAPI）を使用する場合は、追加の設定が必要です
- 画像などの静的アセットは、`next.config.js`で適切に設定する必要があります

## まとめ

Azureの無料枠を使えば、個人ブログのような小規模なサイトなら、費用をかけずに運用できます。
また、GitHubとの連携により、継続的なデプロイも簡単に設定できるので、記事の追加や修正もスムーズに行えます。
