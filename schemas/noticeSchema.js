const joi = require("joi");

const noticeSchema = joi.object({
    title: joi.string().required(),
    name: joi.string().required(),
    birthday: joi.date().required(),
    type: joi.string().required(),
    sex: joi.string().valid('male', 'female').required(),
    location: joi.string().required(),
    category: joi.string().valid('sell', 'lost/found', 'in good hands').required(),
    price: joi.when('category', {
        is: 'sell',
        then: joi.number().min(1).required()
    }),
    comments: joi.string().required(),
    imageUrl: joi.string(),
    phone: joi.string(),
    email: joi
        .string()
        .email({minDomainSegments: 2, tlds: {allow: ["com", "net"]}})
        .required(),
    owner: joi.string().required()
});

module.exports = noticeSchema;
