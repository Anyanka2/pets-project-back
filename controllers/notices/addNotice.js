const Notice = require('../../models/notice')

const addNotice = async (req, res, next) => {
    const {id: owner, email, phone} = req.user;

    const {name, title, birthday, type, comments, category, location, sex, price} =
        req.body;

    const resolve = await Notice.create({
        name,
        birthday,
        type,
        category,
        comments,
        owner,
        sex,
        phone,
        email,
        location,
        title,
        price
    });

    res.status(201).json(resolve);
};

module.exports = addNotice;