## 📚 Table of Contents

- [🎥 Absolute-Cinema](#-absolute-cinema)
- [📖 About This App](#-about-this-app)
- [🚀 Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [📋 Database Schema](#-database-schema)
- [📝 Usage](#-usage)

# 🎥 Absolute-Cinema
映画情報を扱うアプリケーション「Absolute-Cinema」の開発を行うリポジトリです

# 💡Concepts
「Absolute Cinema」は、映画の真髄を感じさせる作品を探し出すことをコンセプトにした映画情報サイトです。
本サービスの名前は、巨匠マーティン・スコセッシ監督の「真の映画とは何か」にまつわる一連の議論と、そこから発展した[インターネット・ミーム](https://trending.knowyourmeme.com/editorials/guides/what-is-absolute-cinema-martin-scorseses-this-is-cinema-memes-explained)に由来しています。

<div align="center">
  <img width="300" src="https://raw.githubusercontent.com/Ar3cibo/solo.mvp/refs/heads/main/image/absolute-cinema-meme.jpg" alt="Absolute Cinema Meme" >
</div>

映画やアニメを見終えたあとで、その素晴らしさに思わず言葉を失う…という体験をしたことはありませんか？
このミームはそんな「これこそが映画だ！」という感覚を表現したいときに使われます。

本サイトでは映画ファンと映画をつなぎ、新たな映画との出会いをサポートしたいという思いから生まれました。

# 📖 About This App
Absolute-Cinema は、映画情報を扱うアプリケーションです。映画の詳細情報を確認したり、情報を辿って新たな映画を発見できる他、将来的にはレビューの投稿やウォッチリストへの登録機能も提供予定（？）です。

# 🚀 Features
- **映画検索**: タイトルやジャンルで映画を検索できます。
- **映画詳細表示**: キャッチコピー、あらすじ、キャスト、公開日などの詳細情報を確認できます。
- **関係者情報**: 監督、脚本家、俳優などの関係者情報を辿ることができます。
- **レビュー機能（予定）**: ユーザーが映画に対してレビューを投稿できます。
- **ウォッチリスト（予定）**: 見たい映画をリストに追加し、管理できます。

# 🛠 Tech Stack
### Backend
- [Postgres](https://www.postgresql.org/)
- [Knex](https://github.com/knex/knex)
- [express](https://github.com/expressjs/express)

### Frontend
- [React](https://github.com/facebook/react)
- [chakra UI](https://www.chakra-ui.com/)



## 📋 Database Schema

プロジェクトのデータベース設計は以下の通りです：

```mermaid

erDiagram
    MOVIES ||--o{ MOVIE_PERSON_ROLES : "1つの映画は0以上の関連情報を持つ"
    PERSONS ||--o{ MOVIE_PERSON_ROLES : "1人の関係者は0以上の関連情報を持つ"
    ROLES ||--o{ MOVIE_PERSON_ROLES : "1つの役割は0以上の関連情報を持つ"
    MOVIES ||--|| DETAILS : "1つの映画は1つの詳細を持つ"

    MOVIES {
        integer id PK "映画の一意識別子"
        integer tmdb_id "映画ID (TMDbからの外部ID)"
    }
    PERSONS {
        integer id PK "関係者の一意識別子"
        varchar name "関係者の名前"
    }
    ROLES {
        integer id PK "役割の一意識別子"
        varchar role "役割の名称（例：監督、脚本、俳優）"
    }
    MOVIE_PERSON_ROLES {
        integer id PK "関連情報の一意識別子"
        integer movie_id FK "関連する映画のID"
        integer person_id FK "関連する関係者のID"
        integer role_id FK "関連する役割のID"
        string character_name "キャラクター名（役者の場合のみ）"
    }
    DETAILS {
        integer id PK "詳細情報の一意識別子"
        integer movie_id FK "関連する映画のID"
        varchar title "映画のタイトル"
        text catchphrase "キャッチコピー"
        text synopsis "あらすじ"
        varchar poster_url "ポスターのURL"
        date release_date "公開日"
    }
  ```

# 📝 Usage

このプロジェクトは、フロントエンドとバックエンドから構成されるアプリケーションです。以下の手順に従って、開発環境をセットアップし、ローカルでアプリケーションを実行してください。

## 前提条件

- [Node.js](https://nodejs.org/)（推奨バージョン: 16.x 以上）
- [npm](https://www.npmjs.com/)（Node.jsに付属）
- [PostgreSQL](https://www.postgresql.org/)（バックエンド用データベース）
- [TMBD](https://www.themoviedb.org/?language=ja) (シードファイルを自分で作成する場合)

## インストール手順

### 1. リポジトリをクローン

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

### 2. フロントエンドとバックエンドの依存関係をインストール

それぞれのディレクトリに移動し、`npm install` を実行します。

#### フロントエンド

```bash
cd frontend
npm install
```

#### バックエンド

```bash
cd backend
npm install
```

### 3. バックエンドの設定

#### 3.1 PostgreSQLのインストール

使用しているOSに応じて、[PostgreSQL](https://www.postgresql.org/download/)をインストールしてください。

#### 3.2 データベースの作成

PostgreSQLを起動し、任意の名前で新しいデータベースを作成します。

例：

```sql
CREATE DATABASE your_database_name;
```

#### 3.3 環境変数の設定

バックエンドディレクトリに `.env.development` ファイルを作成し、以下の環境変数を記述します。

```env
# Database設定
DB_USER=あなたのユーザー名
DB_PASSWORD=あなたのパスワード（設定していない場合は空）
DB_NAME=作成したデータベース名

# TMDB API設定
TMDB_BEARER_TOKEN=TMDBから取得したBEARER_API_TOKEN
```

**例：**

```env
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=myapp_db

TMDB_BEARER_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### 3.4 データベースのマイグレーションとシーディング

バックエンドディレクトリで以下のコマンドを実行し、データベースのマイグレーションとシーディングを行います。

```bash
npm run db:latest && npm run db:seed
```

#### 3.5 サーバーの起動

バックエンドサーバーを起動します。

```bash
npm run dev
```

コンソールに `Listening on port ${PORT}` と表示されれば、サーバーが正常に起動しています。

### 4. フロントエンドの設定

#### 4.1 サーバーの起動

フロントエンドディレクトリに移動し、以下のコマンドを実行します。

```bash
cd frontend
npm run dev
```

コンソールでViteが起動していることを確認し、表示されたURLにアクセスします。

**例：**

```
VITE v4.0.0  ready in 300 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

**例：**: この場合、ブラウザで `http://localhost:5173/` にアクセスすると、アプリケーションが利用可能です。

## 使用方法

上記で表示されたURLにアクセスするとサービスが利用できます。

## 注意

- **データベース接続エラー**: `.env.development` ファイルの `DB_USER`, `DB_PASSWORD`, `DB_NAME` が正しいことを確認してください。
- **ポートが既に使用中**: 他のプロセスが同じポートを使用していないかを確認し、必要に応じてポート番号を変更してください。


