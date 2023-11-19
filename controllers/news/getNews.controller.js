const News = require("../../models/news.model.js");
const collection = require("../../tmp/allArticles.json");

async function getNews(req, res, next) {
    
    // console.log(collection);
    res.json({"message": "ok"});
}

module.exports = getNews;