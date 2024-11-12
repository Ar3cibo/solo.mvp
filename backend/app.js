const express = require('express');
const cors = require('cors');
const knex = require('/db/knex');
const { movies } = require('./db/utils/makeSeedsData');
const app = express();
const db = knex();

/**
 * defining models
 */

const movieModel = {
    async findAll() {
        return db('movies').select('*');
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
            res.status(500).json({ error: 'failed to get movies' });
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

app.get('/api/movies', movieController.findAll);

module.exports = app;
