const NewsModel = require('../../models/news.model');


async function addNews (req, res, next) {

    res.status(200).json({"message": "ok"})
}

module.exports = addNews;