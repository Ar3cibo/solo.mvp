const makeSeedsData = require('../utils/makeSeedsData');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
    const moviesData = await makeSeedsData.movies();
    // Deletes ALL existing entries
    await knex('movies').del();
    await knex('movies').insert(moviesData);
};
