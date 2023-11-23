const express = require("express");
const router = express.Router();
const controller = require('../../controllers/notices')
const wrapper = require('../../helpers/controllerWrappers')
const auth = require('../../middlewares/authMiddleware')

router.post('/', wrapper(controller.getNotices))

router.get('/:noticeId', wrapper(controller.getNoticeById))

router.post('/addNotice', wrapper(auth), wrapper(controller.addNotice))

router.delete('/:noticeId', wrapper(auth), wrapper(controller.deleteNotice))

module.exports = router