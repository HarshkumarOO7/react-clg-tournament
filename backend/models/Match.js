const mongoose = require("mongoose");

<<<<<<< HEAD
const MatchSchema = new mongoose.Schema(
  {
    /* ================= TOURNAMENT ================= */
    tournamentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tournament",
      required: true,
    },

    /* ================= TEAMS (TEAM A & TEAM B) ================= */
    teams: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
        required: true,
      },
    ],

    /* ================= MATCH SCHEDULE ================= */
    matchDate: {
      type: Date,
      required: true,
    },

    /* ================= VENUE ================= */
    venueId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Venue",
      required: true,
    },

    /* ================= MATCH STATUS ================= */
    status: {
      type: String,
      enum: ["scheduled", "live", "completed"],
      default: "scheduled",
    },

    /* ================= RESULT (AFTER COMPLETION) ================= */
    result: {
      winnerTeamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
        default: null,
      },
      score: {
        type: String,
        default: "",
      },
    },

    /* ================= AUDIT ================= */
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true, // createdAt & updatedAt
  }
);
=======
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
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0

module.exports = mongoose.model("Match", MatchSchema);
