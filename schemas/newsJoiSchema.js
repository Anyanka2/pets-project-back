const joi = require("joi");

const newsJoiSchema = joi.object({
    imgUrl: joi.string().required(),
    title: joi.string().required(),
    text: joi.string().required(),
    date: joi.date().required(),
    url: joi.string().required(),
    nytID: joi.string().optional().allow(null),
})

module.exports = newsJoiSchema;