const makeSeedsData = require('../utils/makeSeedsData');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
    const movie_person_rolesData = await makeSeedsData.movie_person_roles();
    // Deletes ALL existing entries
    await knex('movie_person_roles').del();
    await knex('movie_person_roles').insert(movie_person_rolesData);
};
