const Notice = require('../../models/notice')

const getNotices = async (req, res) => {
    const userId = req.user.id;
    const {category, keyword, sex, gt, lt, favorite, own} = req.query;
    const queries = {
        category,
        sex
    };
    if (keyword) queries['title'] = {$regex: keyword, $options: 'i'};
    if (gt) queries['birthday'] = {$gt: gt}
    if (lt) queries['birthday'] = {$lt: lt}
    if (favorite && userId) queries['favorite'] = {$elemMatch: {id: userId}}
    if (own && userId) queries['owner'] = userId

    const notices = await Notice.find(queries)

    res.status(200).json(notices);
}

module.exports = getNotices