## 📚 Table of Contents

- [🎥 Absolute-Cinema](#-absolute-cinema)
- [📖 About This App](#-about-this-app)
- [🚀 Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [📋 Database Schema](#-database-schema)


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


