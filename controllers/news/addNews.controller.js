const NewsModel = require('../../models/news.model');
const newsJoiSchema = require('../../schemas/newsJoiSchema');

async function addNews (req, res, next) {

    console.log(req);

    res.status(200).json({"message": "ok"})
}

module.exports = addNews;