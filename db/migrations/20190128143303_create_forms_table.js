
exports.up = function(knex, Promise) {
  return knex.schema.createTable('forms', table => {
    table.increments();
    table.text('patientuid').notNullable();
    table.text('formname').notNullable();
    table.jsonb('data');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('forms');
};
