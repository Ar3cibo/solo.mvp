require('dotenv').config({ path: `.env.development` });

module.exports = {
    development: {
        client: 'pg',
        connection: {
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        },
        migrations: { directory: './src/db/migrations' },
        seeds: { directory: './src/db/seeds' },
    },
};
