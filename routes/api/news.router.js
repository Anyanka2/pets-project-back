const express = require("express");
const router = express.Router();
const controller = require('../../controllers/news');
const controllerWrapper = require("../../helpers/controllerWrappers");
const auth = require('../../middlewares/authMiddleware');

router.get('/', controllerWrapper(controller.getNews));
router.post('/',controllerWrapper(auth), controllerWrapper(controller.addNews));

module.exports = router;