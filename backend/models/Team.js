const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  teamName: String,

  sportId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sport",
  },

  coachId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  players: [
    { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  ],

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Team", TeamSchema);
