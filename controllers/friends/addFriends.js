const path = require("path");
const Friends = require("../../models/friends.model");
const Fs = require("fs").promises;
const friendsJoiSchema = require("../../schemas/friendsJoiSchema");
const addFriends = async (req, res, next) => {
  const filePath = path.join(__dirname, "../../tmp/sponsors.json");
  console.log(filePath);
  const data = await Fs.readFile(filePath, "utf8");
    const friendsData = JSON.parse(data);
    console.log(friendsData);
    const result = friendsData.map(friend => {
        const { error, value } = friendsJoiSchema.validate(friend);
        if (error) {
            return error.message;
        }
       return value;
    });
    console.log(result.length);
  res.status(200).json(result);
};

module.exports = addFriends;
