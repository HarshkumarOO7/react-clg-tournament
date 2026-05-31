const mongoose = require("mongoose");

<<<<<<< HEAD
const TeamSchema = new mongoose.Schema(
  {
    teamName: {
      type: String,
      required: true,
    },

    tournamentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tournament",
      required: true,
    },

    sportId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sport",
      required: true,
    },

    captainId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },


    players: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        status: {
          type: String,
          enum: ["pending", "approved", "rejected"],
          default: "pending",
        },
      },
    ],
  },
  { timestamps: true }
);

/* 🚨 THIS LINE IS MANDATORY */
module.exports = mongoose.models.Team || mongoose.model("Team", TeamSchema);
=======
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
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
