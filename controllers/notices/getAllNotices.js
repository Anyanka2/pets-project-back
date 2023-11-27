const Notices = require("../../models/notice");


const getAllNotices = async (req, res, next) => {
  try {
    const resolve = await Notices.find();

    return res.status(201).json(resolve);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllNotices;
