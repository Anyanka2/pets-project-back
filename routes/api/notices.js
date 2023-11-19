const express = require("express");
const router = express.Router();
const controller = require('../../controllers/notices')
const wrapper = require('../../helpers/controllerWrappers')
const auth = require('../../middlewares/authMiddleware')

router.get('/', wrapper(controller.getNotices))

router.get('/:noticeId', wrapper(controller.getNoticeById))

router.post('/', wrapper(auth), wrapper(controller.addNotice))

router.delete('/:noticeId', wrapper(auth), wrapper(controller.deleteNotice))

router.patch('/:noticeId/addToFavorite', wrapper(auth), wrapper(controller.addToFavorite))

router.patch('/:noticeId/removeFromFavorite', wrapper(auth), wrapper(controller.removeFromFavorite))

module.exports = router