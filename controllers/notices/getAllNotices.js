const Notices = require("../../models/notice");


const getAllNotices = async (req, res, next) => {
  const offset = parseInt(req.query.offset) || 1;
  const limit = parseInt(req.query.limit) || 10;
  
  try {
    const total = await Notices.countDocuments();
    const totalPages = Math.ceil(total / limit);
    const resourses = await Notices.find()
                          .skip((offset - 1) * limit)
                          .limit(limit)
                          .exec();

    return res.status(200).json({status: "ok",
                                 code: 200,
                                 data:{
                                  resourses,
                                  total,
                                  totalPages
                                 }});
  } catch (error) {
    next(error);
  }
};

module.exports = getAllNotices;
