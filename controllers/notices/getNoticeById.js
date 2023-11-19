const Notice = require('../../models/notice')

const getNoticeById = async (req, res) => {
    const {noticeId} = req.params;

    const notices = await Notice.findById(noticeId)

    res.status(200).json(notices);
}

module.exports = getNoticeById