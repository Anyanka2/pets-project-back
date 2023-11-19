const getNotices = require('./getNotices')
const getNoticeById = require('./getNoticeById')
const deleteNotice = require('./deleteNotice')
const addToFavorite = require('./addToFavorite')
const removeFromFavorite = require('./removeFromFavorite')

module.exports = {
    getNotices,
    getNoticeById,
    deleteNotice,
    addToFavorite,
    removeFromFavorite,
}