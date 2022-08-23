const heroSchemas = require('../schemas/heroSchemas');

const heroMiddleware = async (req, res, next) => {
  const { name, universeId, imageUrl } = req.body;

  const { error } = heroSchemas.validate({ name, universeId, imageUrl });

  if (error) {
    const [code, message] = error.message.split('|');

    return res.status(Number(code)).json({ message });
  }

  return next();
};

module.exports = heroMiddleware;
