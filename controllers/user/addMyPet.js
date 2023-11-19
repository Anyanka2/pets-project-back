const Pets = require("../../models/pet");

const addMyPet = async (req, res, next) => {

  try {

     const { id: owner, email } = req.user;
     console.log(email)
     const { name, birthday, type, comments, filter } = req.body;

     const resolve = await Pets.create({
       name,
       birthday,
       type,
       comments,
       filter,
       owner,
       user_email: email,
     });

     return res.status(201).json(resolve);

  } catch (error) {
    next(error);
  }
 return res.status(201).json(resolve);
};

module.exports = addMyPet;

