const makeSeedsData = require('../utils/makeSeedsData');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
    const detailsData = await makeSeedsData.details();
    // Deletes ALL existing entries
    await knex('details').del();
    await knex('details').insert(detailsData);
};
