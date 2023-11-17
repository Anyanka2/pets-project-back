const User = require("../../models/user");
// fix this request
const addContact = async (req, res, next) => {
  const { user } = req;
  const { id } = req.body;
  user.pets.push(id);

  await User.findByIdAndUpdate(user.id, user);
  res.status(200).json({ pets: user.books });
};
module.exports = addContact;
