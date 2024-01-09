const Friends = require("../../models/friends.model");
const Fs = require("fs").promises;
const getAllFriends = async (req, res, next) => {
    console.log("It is all friends");
    res.status(200).json("its ok");
};

module.exports = getAllFriends;