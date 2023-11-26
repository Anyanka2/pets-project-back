const Notice = require('../../models/notice')

const addNotice = async (req, res, next) => {
    const {id: owner, email, phone} = req.user;
    const imageUrl = req.file?.path

    const {name, title, birthday, type, comments, category, location, sex, price} =
        req.body;

    const resolve = await Notice.create({
        title,
        name,
        birthday,
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