const joi = require("joi");

const friendsJoiSchema = joi.object({
  title: joi.string().required(),
  url: joi.string().optional(),
  addressUrl: joi.string().optional().allow(null),
  imageUrl: joi.string().allow(null),
  address: joi.string().allow(null).required(),
  workDays: joi.array().items(joi.object()).allow(null),
  phone: joi.string().allow(null),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "ua"] } }).optional().allow(null),
});

module.exports = friendsJoiSchema;
