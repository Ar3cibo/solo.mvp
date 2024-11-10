```mermaid

---
title: "ERD for absolute-cinema"
---


    MOVIES ||--o{ MOVIE_PERSON_ROLES : "1つの映画は0以上の関連情報を持つ"
    PERSONS ||--o{ MOVIE_PERSON_ROLES : "1人の関係者は0以上の関連情報を持つ"
    ROLES ||--o{ MOVIE_PERSON_ROLES : "1つの役割は0以上の関連情報を持つ"
    MOVIES ||--o{ DETAILS : "1つの映画は0以上の詳細を持つ"

erDiagram
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
    }
    DETAILS {
        integer id PK "詳細情報の一意識別子"
        integer movie_id FK "関連する映画のID"
        varchar title "映画のタイトル"
        text catchphrase "キャッチコピー"
        text synopsis "あらすじ"
        varchar poster_url "ポスターのURL"
        date release_date "公開日"
        string character_name "キャラクター名（役者の場合のみ）"
    }

