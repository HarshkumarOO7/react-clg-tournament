const mongoose = require("mongoose");

const TournamentSchema = new mongoose.Schema({
  eventName: String,

  sportId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sport",
  },

  location: String,
  startDate: Date,
  endDate: Date,
  maxParticipants: Number,
  description: String,
  rules: String,

  organizerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  status: {
    type: String,
    enum: ["upcoming", "ongoing", "completed"],
    default: "upcoming",
  },

  teams: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Team" }
  ],

  logo: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Tournament", TournamentSchema);
