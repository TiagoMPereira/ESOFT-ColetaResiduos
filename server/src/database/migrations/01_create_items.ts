import {Knex} from 'knex';

export async function up(knex: Knex, try_connection=false) {
  if (try_connection){
    return {"Connection":"false"}
  }
  return knex.schema.createTable('items', table => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('title').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('items');
}

export default up;