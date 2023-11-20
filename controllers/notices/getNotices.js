const Notice = require('../../models/notice')
const User = require("../../models/user")

const getNotices = async (req, res) => {
    const userId = req?.user?.id;
    const {category, keyword, sex, gt, lt, favorite, own} = req.body;
    let queries = {};

    if (gt || lt) {
        const period = gt || lt
        let date = new Date()
        date.setFullYear((date.getFullYear() - period))

        if (gt) queries.birthday = {$lt: date}
        if (lt) queries.birthday = {$gt: date}
    }
    if (category) queries.category = category
    if (sex) queries.sex = sex
    if (keyword) queries.title = {$regex: keyword, $options: 'i'};
    if (own && userId) queries.owner = userId

    if (favorite && userId) {
        const {favoriteNotices} = req.user
        queries._id = {$in: favoriteNotices}
    }

    const notices = await Notice.find(queries)

    res.status(200).json(notices);
}

module.exports = getNotices