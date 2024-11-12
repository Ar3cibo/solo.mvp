const express = require('express');
const cors = require('cors');
const db = require('./db/knex');
const { movies } = require('./db/utils/makeSeedsData');
const app = express();

/**
 * defining models
 */

const movieModel = {
    async findAll() {
        return db('movies as m')
            .join('details as d', 'm.id', 'd.movie_id')
            .select(
                'm.tmdb_id',
                'd.title',
                'd.catchphrase',
                'd.synopsis',
                'd.poster_url',
                'd.release_date',
            );
    },
};
const personModel = {
    async findAll() {
        return db('persons').select('*');
    },
};
const roleModel = {
    async findAll() {
        return db('roles').select('*');
    },
};
const detailModel = {
    async findAll() {
        return db('details').select('*');
    },
};

/**
 * defining controllers
 */

const movieController = {
    async all(req, res) {
        try {
            const movies = await movieModel.findAll();
            res.status(200).json(movies);
        } catch (err) {
            console.error('Error fetching movies:', err);
            res.status(500).json({ error: 'failed to get movies', err });
        }
    },
};
const personController = {
    all: async function (req, res) {
        try {
            const persons = await personModel.findAll();
            res.status(200).json(persons);
        } catch (err) {
            res.status(500).json({ error: 'failed to get persons' });
        }
    },
};
const roleController = {
    all: async function (req, res) {
        try {
            const roles = await roleModel.findAll();
            res.status(200).json(roles);
        } catch (err) {
            res.status(500).json({ error: 'failed to get roles' });
        }
    },
};
const detailController = {
    all: async function (req, res) {
        try {
            const details = await detailModel.findAll();
            res.status(200).json(details);
        } catch (err) {
            res.status(500).json({ error: 'failed to get details' });
        }
    },
};

app.use(express.json());
app.use(cors());

app.get('/api/movies', movieController.all);

module.exports = app;
