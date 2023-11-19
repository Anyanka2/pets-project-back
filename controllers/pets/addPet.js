const requestError = require("../../helpers/requestError");
const contactsSchema = require("../../schemas/registration");
const Pets = require("../../models/pet");
const addPet = async (req, res, next) => {
    try {
        // const { error } = contactsSchema.validate(req.body);

        const {name, birthday, type, comments} = req.body;
        // if (error) {
        //   throw requestError(400, error.message);
        // }

        const resolve = await Pets.create({
            name,
            birthday,
            type,
            comments,
        });

        return res.status(201).json(resolve);
    } catch (error) {
        next(error);
    }
};

module.exports = addPet;
