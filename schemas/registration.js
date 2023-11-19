const joi = require("joi");

const registrationSchema = joi.object({
    name: joi.string().required(),
    password: joi.string().required(),
    email: joi
        .string()
        .email({minDomainSegments: 2, tlds: {allow: ["com", "net"]}}),
});
module.exports = registrationSchema;
