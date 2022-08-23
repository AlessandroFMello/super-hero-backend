/* eslint-disable no-console */
const express = require('express');
const heroesRouter = require('./routes/heroesRouter');
const universesRouter = require('./routes/universesRouter');
const errorMiddleware = require('./middlewares/errorMiddleware');

class App {
  constructor() {
    this.app = express();
    this.config();
    this.routes();
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

  routes() {
    this.app.use('/heroes', heroesRouter);
    this.app.use('/universes', universesRouter);
  }

  getApp() {
    return this.app;
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
