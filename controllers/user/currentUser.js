const User = require("../../models/user");
const requestError = require("../../helpers/requestError");

const currentUserWithPets = async (req, res, next) => {
    try {
        const {user} = req;
        const {_id: owner} = user;

        if (!user) {
            throw requestError(401, "Not authorized");
        }

        const userWithPets = await User.aggregate([
            {
                $match: {_id: owner},
            },
            {
                $lookup: {
                    from: "pets",
                    localField: "pets",
                    foreignField: "_id",
                    as: "petsData",
                },
            },
            {
                $project: {
                    name: 1,
                    email: 1,
                    phone: 1,
                    birthday: 1,
                    city: 1,
                    avatarURL: 1,
                    "petsData._id": 1,
                    "petsData.name": 1,
                    "petsData.birthday": 1,
                    "petsData.type": 1,
                    "petsData.comments": 1,
                    "petsData.imageUrl": 1,
                    _id: 1,
                },
            },
        ]);

        res.status(200).json(userWithPets);
    } catch (error) {
        next(error);
    }
};

module.exports = currentUserWithPets;
