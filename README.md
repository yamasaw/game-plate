# Game Plate 🎮

**Vite**、**React**、**Three.js (R3F)** を使用した、プレミアムなスマートフォン向け WebGL ゲーム開発用ボイラープレートです。

## 🚀 概要

このプロジェクトは、モバイル環境に最適化された軽量でパフォーマンスの高いゲーム基盤を提供します。Three.js との親和性を考慮し、SSR によるトラブルを避けるため Next.js ではなく純粋な Vite 環境を採用しています。

### 主な特徴
- **3D 対応**: `@react-three/fiber` および `@react-three/drei` を統合済み。
- **モバイルファースト**: `100dvh` と `safe-area` パディングにより、モバイルブラウザのフルスクリーン表示に対応。
- **Tailwind CSS v4**: 最新エンジンによる高速なスタイリングと、ゲーム向けにカスタマイズされたテーマ（カラーパレット）。
- **アイコンシステム**: `public/icons/*.svg` を CSS mask を介して利用。Tailwind のクラス (`text-primary` 等) での自由な色変更と、独立したアセット管理を両立。
- **スムーズな画面遷移**: `react-router-dom` をベースに、プレミアムな手触りのアニメーション付きタブバーを実装。

## 🛠 技術スタック

| 技術 | 役割 |
| --- | --- |
| [Vite](https://vitejs.dev/) | ビルドツール & 開発サーバー |
| [React](https://reactjs.org/) | UI ライブラリ |
| [Three.js](https://threejs.org/) | 3D エンジン |
| [R3F](https://r3f.docs.pmnd.rs/) | Three.js の React ブリッジ |
| [Tailwind CSS v4](https://tailwindcss.com/) | スタイリング & デザインシステム |
| [pnpm](https://pnpm.io/) | パッケージマネージャー |

## 📁 ディレクトリ構造

```text
src/
├── components/     # UIコンポーネント (BottomNav, Layout等)
├── pages/          # 画面コンポーネント (GamePage, ForgePage等)
├── assets/         # バンドル対象の静的資産
└── index.css       # グローバルスタイル & Tailwind テーマ定義
public/
└── icons/          # CSS mask から参照される独立した .svg ファイル
```

## ⚙️ アイコン管理

アイコンは `public/icons/` に独立した `.svg` ファイルとして保存されています。
`BottomNav.tsx` では CSS の `mask-image` を使用しており、以下のように Tailwind の色指定を SVG に反映させることが可能です：

```tsx
<div className="bg-primary" style={{ maskImage: "url(/icons/sword.svg)" }} />
```

## ⌨️ 開発方法

### 事前準備
- [pnpm](https://pnpm.io/installation) がインストールされていること。

### セットアップ
```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev

# 本番ビルド
pnpm build
```

## 📜 設計ノート
- **テーマ**: `src/index.css` の `@theme` ブロックで、カスタムカラー（`primary`, `surface`, `border` 等）を定義しています。
- **ビューポート**: `h-[100dvh]` を使用することで、iOS/Android のアドレスバーの表示切り替えに伴うレイアウト崩れを防いでいます。
