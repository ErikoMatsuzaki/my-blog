import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// サンプル記事データ（後でCMSや外部ファイルから取得するように変更可能）
const postsData = [
  {
    id: 1,
    title: "ブログサイトをNext.jsで構築しました",
    slug: "created-blog-with-nextjs",
    excerpt: "モダンな技術スタックを使ってブログサイトを構築した経験について共有します。",
    date: "2025-05-27",
    category: "IT技術",
    coverImage: "/next.svg",
    content: `
# ブログサイトをNext.jsで構築しました

Next.jsは、Reactベースのフレームワークで、高速なウェブサイト構築に最適です。このブログもNext.jsを使って作成しました。

## 選んだ理由

- **静的生成とサーバーサイドレンダリングの両方をサポート**
  記事のような静的なコンテンツは事前にビルド時に生成でき、必要に応じて動的なコンテンツも簡単に扱えます。

- **ファイルベースのルーティング**
  ディレクトリ構造がそのままURLになるので、わかりやすく管理しやすいです。

- **TypeScriptサポート**
  型安全なコーディングが可能で、開発体験が向上します。

- **組み込みのイメージ最適化**
  画像のパフォーマンスを自動的に最適化してくれます。

## 使用した技術

- Next.js 15
- Tailwind CSS
- TypeScript

## 次のステップ

今後は以下の機能を追加する予定です：

1. コメント機能
2. 検索機能
3. カテゴリ別表示
4. タグクラウド

ブログサイトは継続的に改善していく予定です。ぜひ定期的に訪問してください！
`
  },
  {
    id: 2,
    title: "日常の小さな発見",
    slug: "daily-discoveries",
    excerpt: "日常生活の中で見つけた小さな発見や気づきについての記録です。",
    date: "2025-05-26",
    category: "日常",
    coverImage: "/vercel.svg",
    content: `
# 日常の小さな発見

日々の生活の中で、ふとした瞬間に気づく小さな発見があります。それらは些細なことかもしれませんが、私にとっては大切な気づきです。

## 朝の散歩で見つけたこと

早朝の散歩は、一日の始まりとして最高のリフレッシュになります。今朝は特に美しい朝焼けを見ることができました。
街がまだ目覚める前の静寂の中で、自分の思考を整理する時間は貴重です。

## 新しい料理のレシピ

先週、初めて挑戦した料理が予想以上においしくできました。シンプルな材料でも、調理法を少し工夫するだけで驚くほど味が変わることを実感しました。
これからも新しいレシピに挑戦していきたいと思います。

## 読書の楽しみ

最近読んだ本で、新しい視点を得ることができました。読書は知識を得るだけでなく、考え方や感じ方を豊かにしてくれます。
デジタルな日常の中で、紙の本を手に取る時間はとても貴重に感じます。

## 終わりに

日常の中の小さな発見を大切にすることで、毎日がより豊かになると感じています。
皆さんも、ぜひ日常の中の小さな喜びに目を向けてみてください。
`
  },
  {
    id: 3,
    title: "Azure上でのデプロイ方法",
    slug: "deploy-on-azure",
    excerpt: "Next.jsで作成したブログサイトをAzureの無料枠でデプロイする方法を解説します。",
    date: "2025-05-25",
    category: "IT技術",
    coverImage: "/globe.svg",
    content: `
# Azure上でのNext.jsアプリケーションのデプロイ方法

このブログサイトはAzureの無料枠を使ってデプロイしています。この記事では、その方法を解説します。

## Azureの無料枠について

Azureでは、App ServiceやStatic Web Appsなど、いくつかのサービスで無料枠が提供されています。
今回はStatic Web Appsを使用して、Next.jsアプリケーションをデプロイします。

## デプロイ手順

### 1. GitHubリポジトリの準備

まず、ブログのコードをGitHubリポジトリにプッシュします。

\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <リポジトリのURL>
git push -u origin main
\`\`\`

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
- 画像などの静的アセットは、\`next.config.js\`で適切に設定する必要があります

## まとめ

Azureの無料枠を使えば、個人ブログのような小規模なサイトなら、費用をかけずに運用できます。
また、GitHubとの連携により、継続的なデプロイも簡単に設定できるので、記事の追加や修正もスムーズに行えます。
`  },
];

// 静的パラメータを生成する関数
export function generateStaticParams() {
  return postsData.map((post) => ({
    slug: post.slug,
  }));
}

// メタデータを生成
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = postsData.find(post => post.slug === params.slug);
  
  if (!post) {
    return {
      title: '記事が見つかりません',
    };
  }
  
  return {
    title: `${post.title} | My Blog`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  // 該当する記事データを取得
  const post = postsData.find(post => post.slug === params.slug);
  
  // 記事が存在しない場合は404ページを表示
  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white rounded-lg shadow-sm p-6">
      {/* 記事ヘッダー */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Link href="/" className="text-blue-600 hover:underline">
            ホーム
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">{post.category}</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex items-center gap-4 text-gray-500 mb-6">
          <time>{post.date}</time>
          <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
            {post.category}
          </span>
        </div>
        
        {post.coverImage && (
          <div className="w-full h-64 bg-gray-100 rounded-lg relative overflow-hidden mb-8">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-contain p-8"
            />
          </div>
        )}
      </header>
      
      {/* 記事本文（Markdownコンテンツの表現） */}
      <div className="prose prose-lg max-w-none">
        {post.content.split('\n\n').map((paragraph, index) => {
          if (paragraph.startsWith('# ')) {
            return <h1 key={index} className="text-3xl font-bold my-6">{paragraph.substring(2)}</h1>;
          } else if (paragraph.startsWith('## ')) {
            return <h2 key={index} className="text-2xl font-bold my-5">{paragraph.substring(3)}</h2>;
          } else if (paragraph.startsWith('- ')) {
            return <li key={index} className="ml-6 my-2">{paragraph.substring(2)}</li>;
          } else if (paragraph.startsWith('1. ')) {
            return <li key={index} className="ml-6 my-2 list-decimal">{paragraph.substring(3)}</li>;
          } else if (paragraph.startsWith('\`\`\`')) {
            // コードブロックの簡易表現
            const code = paragraph.split('\n').slice(1, -1).join('\n');
            return (
              <pre key={index} className="bg-gray-50 p-4 rounded overflow-x-auto my-4">
                <code>{code}</code>
              </pre>
            );
          } else {
            return <p key={index} className="my-4 leading-relaxed">{paragraph}</p>;
          }
        })}
      </div>
      
      {/* 記事フッター */}
      <footer className="mt-12 pt-6 border-t">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-blue-600 hover:underline">
            ← 記事一覧に戻る
          </Link>
          <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded hover:bg-blue-200 transition-colors">
            共有
          </button>
        </div>
      </footer>
    </article>
  );
}
