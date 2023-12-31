const Notice = require('../../models/notice');
const noticeSchema = require('../../schemas/noticeSchema')
const requestError = require("../../helpers/requestError");
const dateToUnix = require('../../helpers/dateToUnix')

const addNotice = async (req, res, next) => {
    const {id: owner, email, phone} = req.user;
    const imageUrl = req.file?.path;

    const {name, title, birthday, type, comments, category, location, sex, price} =
        req.body;

    const {error} = noticeSchema.validate({
        name,
        title,
        birthday,
        type,
        comments,
        category,
        location,
        sex,
        price,
        owner,
        phone,
        email
    })
    if (error) throw requestError(400, error);

    const birthdayUnix = dateToUnix(birthday);
    const resolve = await Notice.create({
        title,
        name,
        birthday: birthdayUnix,
        type,
        sex,
        location,
        category,
        price,
        comments,
        imageUrl,
        phone,
        email,
        owner
    });

    res.status(201).json(resolve);
};

module.exports = addNotice;