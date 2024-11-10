exports.up = async function(knex) {
    await knex.schema
        // MOVIES テーブルの作成
        .createTable('movies', function(table) {
            table.increments('id').primary().comment('映画の一意識別子');
            table.integer('tmdb_id').notNullable().unique().comment('映画ID (TMDbからの外部ID)');
            table.timestamps(true, true); // created_at と updated_at
        })

        // PERSONS テーブルの作成
        .createTable('persons', function(table) {
            table.increments('id').primary().comment('関係者の一意識別子');
            table.string('name').notNullable().comment('関係者の名前');
            table.timestamps(true, true);
        })

        // ROLES テーブルの作成
        .createTable('roles', function(table) {
            table.increments('id').primary().comment('役割の一意識別子');
            table.string('role').notNullable().unique().comment('役割の名称（例：監督、脚本、俳優）');
            table.timestamps(true, true);
        })

        // DETAILS テーブルの作成
        .createTable('details', function(table) {
            table.increments('id').primary().comment('詳細情報の一意識別子');
            table.integer('movie_id').unsigned().notNullable()
                .references('id').inTable('movies')
                .onDelete('CASCADE').comment('関連する映画のID');
            table.string('title').notNullable().comment('映画のタイトル');
            table.text('catchphrase').comment('キャッチコピー');
            table.text('synopsis').comment('あらすじ');
            table.string('poster_url').comment('ポスターのURL');
            table.date('release_date').comment('公開日');
            table.string('character_name').comment('キャラクター名（役者の場合のみ）');
            table.timestamps(true, true);
        })

        // MOVIE_PERSON_ROLES テーブルの作成
        .createTable('movie_person_roles', function(table) {
            table.increments('id').primary().comment('関連情報の一意識別子');
            table.integer('movie_id').unsigned().notNullable()
                .references('id').inTable('movies')
                .onDelete('CASCADE').comment('関連する映画のID');
            table.integer('person_id').unsigned().notNullable()
                .references('id').inTable('persons')
                .onDelete('CASCADE').comment('関連する関係者のID');
            table.integer('role_id').unsigned().notNullable()
                .references('id').inTable('roles')
                .onDelete('CASCADE').comment('関連する役割のID');
            table.timestamps(true, true);
        });
};

exports.down = async function(knex) {
    await knex.schema
        // テーブルを逆順で削除（依存関係を考慮）
        .dropTableIfExists('movie_person_roles')
        .dropTableIfExists('details')
        .dropTableIfExists('roles')
        .dropTableIfExists('persons')
        .dropTableIfExists('movies');
};