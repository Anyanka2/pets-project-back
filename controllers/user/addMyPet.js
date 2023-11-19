const Pets = require("../../models/pet");

const addMyPet = async (req, res, next) => {

  try {

     const { id: owner, email, user_phone: phone } = req.user;
     
     const { name, birthday, type, comments, filter, location, price } =
       req.body;

     const resolve = await Pets.create({
       name,
       birthday,
       type,
       comments,
       filter,
       price,
       owner,
       user_phone: phone,
       user_email: email,
       location,
     });

     return res.status(201).json(resolve);

  } catch (error) {
    next(error);
  }
 return res.status(201).json(resolve);
};

module.exports = addMyPet;

