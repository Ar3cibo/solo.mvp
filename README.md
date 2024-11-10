## 📚 Table of Contents

- [🎥 Absolute-Cinema](#-absolute-cinema)
- [📖 About This App](#-about-this-app)
- [🚀 Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [📋 Database Schema](#-database-schema)


# 🎥Absolute-Cinema
映画情報を扱うアプリケーション「Absolute-Cinema」の開発を行うリポジトリです

# 📖About This App
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

## 📋 Database Schema

プロジェクトのデータベース設計は以下の通りです：

```mermaid
---
title: "ER diagram for Absolute-Cinema"
---

erDiagram

movies ||--o{ details : "1つの映画は0以上の詳細を持つ"
movies ||--o{ movie_person_roles : "1つの映画は0以上の関連情報を持つ"
persons ||--o{ movie_person_roles : "1人の関係者は0以上の関連情報を持つ"
roles ||--o{ movie_person_roles : "1つの役割は0以上の関連情報を持つ"

movies {
  bigint id PK
  bigint tmdb_id "映画ID"
}

details {
  bigint id PK
  bigint movie_id FK "映画ID"
  string title "タイトル"
  text catchphrase "キャッチコピー"
  text synopsis "あらすじ"
  string poster_url "ポスターURL"
  date release_date "公開日"
}

persons {
  bigint id PK
  string name "関係者の名前"
}

roles {
  bigint id PK
  string role_name "役割（監督、脚本、俳優）"
}

movie_person_roles {
  bigint id PK
  bigint role_id FK "役割ID"
  bigint person_id FK "関係者ID"
  bigint movie_id FK "映画ID"
  string character_name "キャラクター名（役者の場合のみ）"
}

