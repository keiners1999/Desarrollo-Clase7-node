const Sequelize = require("sequelize");

const DB_NAME = 'db_ventavehiculos_node';

const DB_USER = 'keiners';

const DB_PASS = 'keiners1999';

export const database = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,

    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }

);

database.sync({force: false})
    .then(function() {
        console.log('Bases de datos creadas correctamente...');
    });
