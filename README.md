# Serverless-Express-Tutorial

このリポジトリは、Serverless環境でExpressアプリケーションを動作させるためのサンプルプロジェクトです。  
以下の手順に従って、ローカル環境で開発を始めることができます。

---

## 前提条件

- [Node.js](https://nodejs.org/) (推奨: v18以上)
- [pnpm](https://pnpm.io/) (推奨: v8以上)
- [Docker](https://www.docker.com/) および [Docker Compose](https://docs.docker.com/compose/)
- Git

### バージョン確認コマンド

ご自身の環境で以下のコマンドを実行し、バージョンを確認してください。

```sh
node -v
pnpm -v
```

---

## 1. リポジトリのクローン

```sh
git clone https://github.com/Khitoshi/Serverless-Express-Tutorial.git
cd Serverless-Express-Tutorial
```

---

## 2. 依存パッケージのインストール

プロジェクトルートで以下を実行してください。

```sh
pnpm install
```

---

## 3. .envファイルの作成・確認

環境変数ファイル（.env）が必要です。  
サンプルファイルがある場合はコピーして編集してください。

```sh
cp .env.example .env
# 必要に応じて .env を編集
```

---

## 4. Dockerの起動・再起動・再構築（DBなどのミドルウェア用）

DBなどの依存サービスをDockerで起動します。

```sh
docker-compose up -d
```

- 初回起動時はイメージのダウンロードに時間がかかる場合があります。
- `docker ps` でコンテナの起動状況を確認できます。

### よく使うDockerコマンド

- **コンテナの停止とボリューム削除（DBデータも削除されます）**
  
  ```sh
  docker-compose down -v
  ```

  - DBの初期化やクリーンな状態に戻したい場合に使用します。

- **イメージの再ビルド（キャッシュを使わずに完全再構築）**

  ```sh
  docker-compose build --no-cache
  ```

  - Dockerfileや依存パッケージを更新した場合に利用します。

- **コンテナの起動（バックグラウンド実行）**
  
  ```sh
  docker-compose up -d
  ```
  
  - 通常の起動時に使用します。

---

## 5. DBマイグレーション & Prisma Clientの生成

Prismaを利用してDBスキーマを反映・クライアントを生成します。

```sh
pnpm db:migrate:dev
pnpm db:generate
```

- `db:migrate:dev`：開発用DBにマイグレーションを適用
- `db:generate`：Prisma Clientを生成

---

## 6. 開発サーバーの起動

ローカルでExpressアプリを起動します。

```sh
pnpm dev
```

- `http://localhost:3000` などでアプリにアクセスできます（ポートは設定により異なります）。

---

## 7. その他の便利なコマンド

- テストの実行:
  
  ```sh
  pnpm test
  ```

- Lintチェック:

  ```sh
  pnpm lint
  ```

- フォーマット:  

  ```sh
  pnpm format
  ```

---

## よくあるトラブル・FAQ

- **Q. Dockerが起動しない/DBに接続できない**
  - Docker Desktopが起動しているか確認
  - ポート競合がないか確認
  - `.env`のDB接続情報が正しいか確認
  - 必要に応じて以下を実行し、環境をリセットしてください
  
    ```sh
    docker-compose down -v
    docker-compose build --no-cache
    docker-compose up -d
    ```

- **Q. マイグレーションでエラーが出る**
  - DBコンテナが起動しているか確認
  - Prismaのバージョンを確認

- **Q. 依存パッケージのインストールでエラー**
  - Node.jsとpnpmのバージョンを確認
  - `node_modules`や`pnpm-lock.yaml`を削除して再インストール

---

## 参考リンク

- [Prisma公式ドキュメント](https://www.prisma.io/docs/)
- [Express公式ドキュメント](https://expressjs.com/ja/)
- [Serverless Framework公式](https://www.serverless.com/)

---
