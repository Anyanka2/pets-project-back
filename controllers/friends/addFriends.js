// const path = require("path");
// const FriendsModelDb = require("../../models/friends.model");
// const friendsJoiSchema = require("../../schemas/friendsJoiSchema");
const addFriends = async (req, res, next) => {
  
  const data = req.body;
    // const friendsData = JSON.parse(data);
    // console.log(friendsData);
    // const result = friendsData.map(friend => {
    //     const { error, value } = friendsJoiSchema.validate(friend);
    //     if (error) {
    //         return error.message;
    //   }
    //   const createCollection = FriendsModelDb.create(value);
    //   console.log(createCollection);
    //    return value;
    // });
  res.status(200).json(data);
};

module.exports = addFriends;
