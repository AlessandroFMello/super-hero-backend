require('dotenv').config();

const environment = process.env.NODE_ENV || "test";

const suffix = {
  prod: "",
  production: "",
  dev: "-dev",
  development: "-dev",
  test: "-test",
};

const options = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: 
    `${process.env.DB_NAME}${suffix[environment]}`,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  },
};