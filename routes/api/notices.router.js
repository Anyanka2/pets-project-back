const express = require("express");
const router = express.Router();
const controller = require('../../controllers/notices')
const wrapper = require('../../helpers/controllerWrappers')
const auth = require('../../middlewares/authMiddleware')
const upload = require('../../middlewares/uploadFiles')

router.post('/', wrapper(controller.getNotices))

router.get('/:noticeId', wrapper(controller.getNoticeById))

router.get("/", wrapper(controller.getAllNotices));

router.post('/addNotice', wrapper(auth), upload.single('notice_image'), wrapper(controller.addNotice))

router.delete('/:noticeId', wrapper(auth), wrapper(controller.deleteNotice))

module.exports = router