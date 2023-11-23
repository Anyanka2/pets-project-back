const Pets = require("../../models/pet.js");
const User = require("../../models/user.js");

async function deleteMyPet(req, res, next) {
  try {
    const { id } = req.params;

 
    const deletedPet = await Pets.findByIdAndDelete(id);
    if (!deletedPet) {
      throw requestError(400, "Pet not found");
    }


    const { owner } = deletedPet;
    await User.findOneAndUpdate(
      { _id: owner },
      { $pull: { pets: id } },
      { new: true }
    );

    return res.status(204).json({ message: "Pet has been removed" });
  } catch (error) {
    next(error);
  }
}

module.exports = deleteMyPet;
