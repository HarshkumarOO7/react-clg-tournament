const mongoose = require("mongoose");

const SponsorSchema = new mongoose.Schema({
  name: String,
  logo: String,

  tournamentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tournament",
  },

  amount: Number,
});

module.exports = mongoose.model("Sponsor", SponsorSchema);
