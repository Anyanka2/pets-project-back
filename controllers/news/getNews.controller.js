const News = require("../../models/news.model.js");

async function getNews(req, res, next) {

    const offset = parseInt(req.query.offset) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const newsTitle = req.query.title || ".*";
    const total = await News.find({title: {$regex: newsTitle, $options: `i`}}).countDocuments();
    const totalPages = Math.ceil(total / limit);

    const resourses = await News.find({title: {$regex: newsTitle, $options: `i`}})
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