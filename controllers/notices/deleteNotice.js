const Notice = require('../../models/notice')

const deleteNotice = async (req, res) => {
    const {noticeId} = req.params;

    const notices = await Notice.findByIdAndRemove(noticeId)

    res.status(200).json(notices);
}

module.exports = deleteNotice