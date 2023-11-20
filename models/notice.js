const {Schema, model} = require("mongoose");

const noticeSchema = Schema(
    {
        category: {
            type: String,
            required: [true, "Category is required"],
        },
        title: {
            type: String,
            required: [true, "Notices title is required"],
        },
        name: {
            type: String,
            required: [true, "Pet name is required"],
        },
        birthday: {
            type: Date,
        },
        type: {
            type: String,
        },
        location: {
            type: String,
        },
        sex: {
            type: String,
        },
        price: {
            type: Number,
        },
        phone: {
            type: String,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
        },
        comments: {
            type: String,
            required: [true, "Comments is required"],
        },
        imageUrl: {
            type: String,
        },
        owner: {
            type: String,
            required: [true, "Owner is required"],
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Notice = model("Notice", noticeSchema);

module.exports = Notice;
