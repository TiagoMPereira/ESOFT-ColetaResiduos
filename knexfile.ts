import path from 'path';

module.exports = {
    client: 'sqlite3',
    connection: {
        //__dirname - retorno o diretorio do arquivo que estamos executando
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
    },

    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true,
};
