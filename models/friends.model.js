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
        },
        imageUrl: {
            type: String,
        },
        address: {
            type: String,
        },
        workDays: {
            type: [],
        },
        phone: {
            type: String,
        },
        email: {
            type: String,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
const Friends = model("friends", friendsSchema);

module.exports = Friends;
