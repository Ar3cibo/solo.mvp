const makeSeedsData = require('../utils/makeSeedsData');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
    const rolesData = await makeSeedsData.roles();
    // Deletes ALL existing entries
    await knex('roles').del();
    await knex('roles').insert(rolesData);
};
