const { Schema, model, Types } = require("mongoose");
const path = require("path");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    avatarURL: {
      type: String,
      default: path.join(__dirname, "/public/avatar/default_avatar.png"),
    },
    birthday: {
      type: Date,
    },
    city: {
      type: String,
    },
    phone: {
      type: String,
    },
    token: {
      type: String,
      default: null,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      // required: [true, "Verify token is required"],
    },
    favoriteNotices: [],
    pets: [
      {
        type: Schema.Types.ObjectId,
        ref: "pet",
      },
    ]
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = model("user", userSchema);

module.exports = User;
