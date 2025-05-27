import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostData {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  author: string;
  slug: string;
}

export function getSortedPostsData(): PostData[] {
  // /posts ディレクトリ内のファイル名を取得
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // ファイル名から .md を削除してidとして使用
    const id = fileName.replace(/\.md$/, '');
    const slug = id;

    // Markdownファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // gray-matterを使用してメタデータセクションを解析
    const matterResult = matter(fileContents);

    // データをidと一緒に返す
    return {
      id,
      slug,
      content: matterResult.content,
      ...(matterResult.data as { 
        date: string; 
        title: string; 
        excerpt: string; 
        coverImage: string;
        category: string;
        author: string;
      }),
    };
  });

  // 投稿を日付でソート
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getPostData(slug: string): PostData {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // メタデータセクションを解析
  const matterResult = matter(fileContents);

  // データをid、整形されたMarkdownと一緒に返す
  return {
    id: slug,
    slug,
    content: matterResult.content,
    ...(matterResult.data as { 
      date: string; 
      title: string; 
      excerpt: string; 
      coverImage: string;
      category: string;
      author: string;
    }),
  };
}
