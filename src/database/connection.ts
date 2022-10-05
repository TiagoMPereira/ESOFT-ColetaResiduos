import knex from 'knex'; 
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        //__dirname - retorno o diretorio do arquivo que estamos executando
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
});

export default connection;