const Joi = require('joi');

const error400 = '400|All fields must be filled';

const loginSchemas = Joi.object({
  universe: Joi.string().required().min(1).empty()
    .messages({
      'any.required': error400,
      'string.empty': error400,
      'string.base': '400|Name must be a string',
      'string.min': '401|Name must be equal to or have more than 1 characters',
    }),
});

module.exports = loginSchemas;
