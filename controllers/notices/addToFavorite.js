const Notice = require('../../models/notice')

const addToFavorite = async (req, res) => {
    const {noticeId} = req.params;

    const notices = await Notice.findByIdAndUpdate(noticeId, {
        $push: {favoriteForUsers: req.user.id}
    })

    res.status(200).json(notices);
}

module.exports = addToFavorite