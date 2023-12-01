const Notice = require('../../models/notice')
const dateToUnix = require("../../helpers/dateToUnix");

const getNotices = async (req, res) => {
    const userId = req?.user?.id;
    const {category, keyword, sex, gt, lt, favorite, own, page = 1, limit = 12} = req.body;
    const offset = (page - 1) * limit;
    let queries = {};

    if (gt || lt) {
        const period = gt || lt
        let date = new Date()
        date.setFullYear((date.getFullYear() - period))
        date = dateToUnix(date)

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

    if (favorite || own && !userId) res.status(401).json("Not authorized")

    const notices = await Notice.find(queries).sort('-createdAt').exec();

    if (!notices || notices.length === 0) return res.status(404).json("Not found");

    const totalNotices = notices.length;
    const totalPages = Math.ceil(notices.length / limit);
    const paginatedNotices = notices.splice(offset, limit);

    res.status(200).json({notices: paginatedNotices, totalNotices, totalPages});
}

module.exports = getNotices