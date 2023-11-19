const News = require("../../models/news.model.js");

async function getNews(req, res, next) {

    const offset = parseInt(req.query.offset) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const total = await News.countDocuments();
    const totalPages = Math.ceil(total / limit);

    const resourses = await News.find()
                        .skip((offset - 1) * limit )
                        .limit(limit)
                        .exec();
    
    res.json({
            "status": "ok",
            "code": 200,
            "data": {
                resourses,
                total,
                totalPages
            }});
}

module.exports = getNews;