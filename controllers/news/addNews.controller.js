const NewsModel = require('../../models/news.model');
const newsJoiSchema = require('../../schemas/newsJoiSchema');

async function addNews (req, res, next) {
    const {body, user} = req;
    console.log(body);

    res.status(200).json({"message": "ok"});
}

module.exports = addNews;