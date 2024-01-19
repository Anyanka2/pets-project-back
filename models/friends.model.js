const { Schema, model } = require("mongoose");

const friendsSchema = new Schema(
    {
        title: {
            type: String,
        },
        url: {
            type: String,
        },
        addressUrl: {
            type: String,
            default: null,
        },
        imageUrl: {
            type: String,
            default: null,
        },
        address: {
            type: String,
            default: "website only",
        },
        workDays: {
            type: [],
            default: "day and night",
        },
        phone: {
            type: String,
            default: "email only",
        },
        email: {
            type: String,
            default: "not available",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
const Friends = model("friends", friendsSchema);

module.exports = Friends;
