const universeSchemas = require('../schemas/universeSchemas');

const heroMiddleware = async (req, res, next) => {
  const { universe } = req.body;

  const { error } = universeSchemas.validate({ universe });

  if (error) {
    const [code, message] = error.message.split('|');

    return res.status(Number(code)).json({ message });
  }

  return next();
};

module.exports = heroMiddleware;
