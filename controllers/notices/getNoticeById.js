const Notice = require('../../models/notice')

const getNoticeById = async (req, res) => {
    const {noticeId} = req.params;

    const notices = await Notice.findById(noticeId)

    if (!notices) return res.status(404).json("Not found");
    
    res.status(200).json(notices);
}

module.exports = getNoticeById