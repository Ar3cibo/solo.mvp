const makeSeedsData = require('../utils/makeSeedsData');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
    const personsData = await makeSeedsData.persons();
    // Deletes ALL existing entries
    await knex('persons').del();
    await knex('persons').insert(personsData);
};
