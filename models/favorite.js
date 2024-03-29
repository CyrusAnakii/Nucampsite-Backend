const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  campsites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "campsite",
    },
  ],
});

const Favorite = mongoose.model("Favorite", campsiteSchema);

module.exports = Favorite;
