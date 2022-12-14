const Joi = require('joi');

const error400 = '400|All fields must be filled';

const loginSchemas = Joi.object({
  name: Joi.string().required().min(1).empty()
    .messages({
      'any.required': error400,
      'string.empty': error400,
      'string.base': '400|Name must be a string',
      'string.min': '401|Name must be equal to or have more than 1 characters',
    }),
  universeId: Joi.number().required().empty()
    .messages({
      'any.required': error400,
      'number.empty': error400,
      'number.base': '400|UniverseId must be a number',
    }),
  imageUrl: Joi.string().required().empty()
    .messages({
      'any.required': error400,
      'string.empty': error400,
      'string.base': '400|ImageUrl must be a string',
    }),
});

module.exports = loginSchemas;
