require('dotenv').config();
const App = require('./app');

const PORT = process.env.PORT || 3001;

const server = new App();

server.start(PORT);

module.exports = server;
