const getNotices = require('./getNotices')
const getNoticeById = require('./getNoticeById')
const addNotice = require('./addNotice')
const deleteNotice = require('./deleteNotice')
const addToFavorite = require('./addToFavorite')
const removeFromFavorite = require('./removeFromFavorite')

module.exports = {
    getNotices,
    getNoticeById,
    addNotice,
    deleteNotice,
    addToFavorite,
    removeFromFavorite,
}