const Notice = require('../../models/notice')

const deleteNotice = async (req, res) => {
    const {noticeId} = req.params;

    const notices = await Notice.findOneAndDelete({_id: noticeId, owner: req.user.id})

    res.status(200).json(notices);
}

module.exports = deleteNotice