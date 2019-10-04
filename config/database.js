require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: "127.0.0.1",
    dialect: "mysql",
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
      timezone: "+07:00"
    },
    timezone: "+07:00" //for writing to database
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: process.env.DB_USER_PRODUCTION,
    password: process.env.DB_PASSWORD_PRODUCTION,
    database: process.env.DB_NAME_PRODUCTION,
    host:process.env.DB_HOST_PRODUCTION,
    dialect: "mysql",
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
      timezone: "+07:00"
    },
    timezone: "+07:00" //for writing to database
  }
};
