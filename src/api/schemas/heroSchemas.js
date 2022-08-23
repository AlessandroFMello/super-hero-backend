const Joi = require('joi');

const error400 = '400|All fields must be filled';

const loginSchemas = Joi.object({
  name: Joi.string().required().min(12).empty()
    .messages({
      'any.required': error400,
      'string.empty': error400,
      'string.base': '400|Name must be a string',
      'string.min': '401|Name must be equal or more than 12 characters',
    }),
  universeId: Joi.number().required().empty()
    .messages({
      'any.required': error400,
      'string.empty': error400,
      'string.base': '400|UniverseId must be a string',
    }),
  imageUrl: Joi.string().required().empty()
    .messages({
      'any.required': error400,
      'string.empty': error400,
      'string.base': '400|ImageUrl must be a string',
    }),
});

module.exports = loginSchemas;
