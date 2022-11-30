import "jest"

import ItemsController from "../src/controller/ItemsController";
import seed from "../src/database/seeds/create_items";
import upPoints from "../src/database/migrations/00_create_points";
import upItems from "../src/database/migrations/01_create_items";
import upPointItems from "../src/database/migrations/02_create_point_items";
import knex from 'knex';
import path from 'path'

describe('Fail on connect on create items', () => {
  test('Invalid argument', async() => {
    const data = {"Connection":"false"}

    const result = await seed(".", true);

    expect(result).toEqual( { ...data } );
  });
});

describe('Fail on connect on create points', () => {
  test('Invalid argument', async() => {
    const data = {"Connection":"false"}
    const connection = knex({
      client: 'sqlite3',
      connection:{
          filename: path.resolve(__dirname, 'database.sqlite')
      },
      useNullAsDefault: true
  })

    const result = await upPoints(connection, true);

    expect(result).toEqual( { ...data } );
  });
});

describe('Fail on connect on create items on connection', () => {
  test('Invalid argument', async() => {
    const data = {"Connection":"false"}
    const connection = knex({
      client: 'sqlite3',
      connection:{
          filename: path.resolve(__dirname, 'database.sqlite')
      },
      useNullAsDefault: true
  })

    const result = await upItems(connection, true);

    expect(result).toEqual( { ...data } );
  });
});

describe('Fail on connect on create point items', () => {
  test('Invalid argument', async() => {
    const data = {"Connection":"false"}
    const connection = knex({
      client: 'sqlite3',
      connection:{
          filename: path.resolve(__dirname, 'database.sqlite')
      },
      useNullAsDefault: true
  })

    const result = await upPointItems(connection, true);

    expect(result).toEqual( { ...data } );
  });
});