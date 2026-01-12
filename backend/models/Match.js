const mongoose = require("mongoose");

const MatchSchema = new mongoose.Schema({
  tournamentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tournament",
  },

  teams: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Team" }
  ],

  matchDate: Date,

  venueId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Venue",
  },

  status: {
    type: String,
    enum: ["scheduled", "completed"],
    default: "scheduled",
  },

  result: {
    winnerTeamId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
    score: String,
  },
});

module.exports = mongoose.model("Match", MatchSchema);
