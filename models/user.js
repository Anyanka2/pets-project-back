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
      default: "",
    },
    birthday: {
      type: String,
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
    ],
    permissionLevel: {
      type: String,
      enum: ['user', 'admin', 'manager', 'moderator'],
      default: "user",
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = model("user", userSchema);

module.exports = User;
