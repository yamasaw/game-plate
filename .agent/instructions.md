# Antigravity Project Instructions

このプロジェクトにおける開発ルールと設計思想です。AIエージェントが作業する際のガイドラインとして使用してください。

## 🛠 技術スタック・ツール
- **パッケージマネージャー**: `pnpm` を使用。`npm` や `yarn` は使用しない。
- **ビルドツール**: `Vite`。SSR（Next.js）は Three.js との相性を考慮し、意図的に避けている。
- **スタイリング**: `Tailwind CSS v4`。
    - CSS Modules ではなくユーティリティクラスを優先する。
    - 共通カラーや変数は `src/index.css` の `@theme` ブロックで管理する。

## 📱 モバイル最適化
- **Viewport**: 画面の高さには `100dvh` を使用し、モバイルブラウザのアドレスバーによる崩れを防止する。
- **Safe Area**: ボトムナビゲーションなどは `pb-[--safe-bottom]` （`env(safe-area-inset-bottom)`）を考慮する。

## 🎨 アセット管理（アイコン）
- **SVG管理**: アイコンは独立した `.svg` ファイルとして `public/icons/` に配置する。
- **カラー制御**: アイコンの表示には CSS の `mask-image` を使用する。
    - これにより、独立した SVG を使いつつ、Tailwind の `text-primary` 等で色を変更可能にする。
    - 実装例: `<div className="bg-current" style={{ maskImage: "url(/icons/name.svg)" }} />`

## 🎮 3Dレイアウト
- **構成**: `Canvas` をメイン背景として配置し、その上に HTML UI をオーバーレイする構成を基本とする。
- **ライブラリ**: `@react-three/fiber` および `@react-three/drei` を使用する。

## 📝 コミット・Git 運用
- 作業が完了した際、または大きな区切りでコミットを行う。
- 直前の微修正などは `commit --amend` を検討する。
- **Git Push 制限**: ユーザーからの**明示的な指示（「プッシュしてください」等）があるまで、絶対に `git push` を実行しない**。
