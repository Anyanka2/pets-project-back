const Pets = require('../../models/pet.js');

async function deleteMyPet (req, res, next){
    try {
        const { id } = req.params;
        // const { _id: owner } = req.user;
    
        const resolve = await Pets.deleteOne({ _id: id });
        if (!resolve) {
          throw requestError(400);
        }
        return res.status(204).json({ message: "Pet has been removed" });
      } catch (error) {
        next(error);
      }
}

module.exports = deleteMyPet;