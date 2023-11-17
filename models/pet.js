const { Schema, Types, model } = require("mongoose");

const petsSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Pet name is required"],
    },
    birthday: {
      type: String,
      required: [true, "Pet birthday is required"],
    },
    type: {
      type: String,
      required: [true, "Pet type is required"],
    },
    comments: {
      type: String,
      required: [true, "Comments is required"],
    },
    // photoURL: {
    //   type: String,
    //   required: [true, "Pet photo is required"],
    // },
    // photoId: {
    //   type: String,
    // },
    // owner: {
    //   type: Types.ObjectId,
    //   ref: "Users",
    //   required: [true, "Pet must have an owner"],
    // },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Pets = model("Pets", petsSchema);

module.exports = Pets;
