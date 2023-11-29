const { Schema, model } = require("mongoose");

const newsSchema = Schema(
  {
    imgUrl: {
      type: String,
    },
    title: {
      type: String,
    },
    text: {
      type: String,
    },
    date: {
      type: String,
    },
    url: {
      type: String,
    },
    nytID: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const News = model("News", newsSchema);

module.exports = News;
