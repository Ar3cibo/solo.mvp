```mermaid
---
title: "毎日TODO ER図"
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
