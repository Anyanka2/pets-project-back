const Notices = require("../../models/notice");


const getAllNotices = async (req, res, next) => {
  const offset = parseInt(req.query.offset) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const petTitle = req.query.title || ".*";
  
  try {
    const total = await Notices.find({title: {$regex: petTitle, $options: `i`}}).countDocuments();
    const totalPages = Math.ceil(total / limit);
    const resourses = await Notices.find({title: {$regex: petTitle, $options: `i`}})
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
