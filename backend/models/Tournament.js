const mongoose = require("mongoose");

const TournamentSchema = new mongoose.Schema({
<<<<<<< HEAD
  eventName: {
    type: String,
    required: true,
  },
=======
  eventName: String,
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0

  sportId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sport",
<<<<<<< HEAD
    required: true,
  },

  venueId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Venue",
    required: true,
  },

  prizePool: {
    type: Number,
    default: 0,
  },

  location: String,

  startDate: {
    type: Date,
    required: true,
  },

  endDate: {
    type: Date,
    required: true,
  },

  maxParticipants: Number,

=======
  },

  location: String,
  startDate: Date,
  endDate: Date,
  maxParticipants: Number,
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
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
<<<<<<< HEAD

  createdAt: {
    type: Date,
    default: Date.now,
  },
=======
  createdAt: { type: Date, default: Date.now },
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
});

module.exports = mongoose.model("Tournament", TournamentSchema);
