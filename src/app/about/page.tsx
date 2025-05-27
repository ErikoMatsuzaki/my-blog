import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold mb-6 border-b pb-3">About</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <div className="w-32 h-32 rounded-full bg-blue-100 mx-auto mb-4 relative overflow-hidden">
                <Image 
                  src="/globe.svg"
                  alt="プロフィール画像"
                  fill
                  className="object-cover p-4"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">ブログ管理人</h2>
              <p className="text-gray-600 mb-4">Web開発者 / ブロガー</p>              <div className="flex justify-center gap-4">
                <Link href="#" className="text-blue-500 hover:text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-blue-500 hover:text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4">ブログについて</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              このブログは、日常生活やIT技術に関する個人的な記録と情報発信のために立ち上げました。
              日々の出来事や気づき、また、SE（ソフトウェアエンジニア）としての経験から得た知識や学びを共有していきます。
            </p>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              特に、Next.jsやReact、Azure等のWeb技術に関する内容を中心に、技術的な情報も発信していく予定です。
              初心者の方にも分かりやすい解説を心がけ、同時に深い技術的な内容も取り扱っていきます。
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">経歴</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>ソフトウェアエンジニアとして5年の経験</li>
              <li>Webシステム開発を中心に活動</li>
              <li>フロントエンド・バックエンド両方の開発経験あり</li>
              <li>クラウドサービス（特にAzure）の活用に興味を持つ</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">連絡先</h3>
            <p className="text-gray-700">
              お問い合わせやご質問は以下のメールアドレスまでお願いします：<br />              <Link href="mailto:contact@example.com" className="text-blue-600 hover:underline">
                contact@example.com
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
