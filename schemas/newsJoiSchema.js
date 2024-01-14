const joi = require("joi");

const newsJoiSchema = joi.object({
    imgUrl: joi.string().optional().allow(null),
    title: joi.string().required(),
    text: joi.string().required(),
    date: joi.string().required(),
    url: joi.string().optional().allow(null),
    nytID: joi.string().optional().allow(null),
})

module.exports = newsJoiSchema;