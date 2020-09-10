module.exports = {
  development: {
    username: 'root',
    password: process.env.DATABASE_DEV_PASSWORD,
    database: 'dldev',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false,
    define: {
      underscored: false
    },
  },
  test: {
    username: 'root',
    password: process.env.DATABASE_TEST_PASSWORD,
    database: 'dltest',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false,
    define: {
      underscored: false
    },
  },
  production: {
    username: 'root',
    password: process.env.DATABASE_PROD_PASSWORD,
    database: 'dlprod',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false,
    define: {
      underscored: false
    },
  },
}