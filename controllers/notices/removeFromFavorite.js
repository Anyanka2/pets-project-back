const Notice = require('../../models/notice')

const removeFromFavorite = async (req, res) => {
    const {noticeId} = req.params;

    const notices = await Notice.findByIdAndUpdate(noticeId, {
        $pull: {favoriteForUsers: req.user.id}
    })

    res.status(200).json(notices);
}

module.exports = removeFromFavorite