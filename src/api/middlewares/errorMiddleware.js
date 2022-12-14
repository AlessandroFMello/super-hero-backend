/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
const errorMiddleware = (err, _req, res, _next) => {
  console.log(err);

  return res.status(500).json({ err, error: 'Internal Server Error' });
};

module.exports = errorMiddleware;
