
exports.up = function(knex) {
  return knex.schema.createTable('Flats', (table) => {
    table.increments();
    table.string('title');
    table.integer('price');
    table.integer('floorArea');
    table.string('country');
    table.integer('zip');
    table.string('city');
    table.string('street');
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('Flats');
};

