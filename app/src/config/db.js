const knex = require("knex");
const config = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database.sqlite",
    },
    useNullAsDefault: true,
  },
};

const db = knex(config.development);

module.exports = db;
