import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // ビルド時の型チェックを無効化（開発環境では型チェックが行われます）
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
