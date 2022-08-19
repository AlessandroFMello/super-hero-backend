/* eslint-disable no-console */
const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');

class App {
  constructor() {
    this.app = express();
    this.config();
    this.errorHandler();
  }

  config() {
    const accessControl = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
  }

  errorHandler() {
    this.app.use(errorMiddleware);
  }

  start(PORT) {
    this.app.use(express.json());
    this.app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  }
}

module.exports = App;
