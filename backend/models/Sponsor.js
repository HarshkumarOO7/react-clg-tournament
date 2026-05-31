const mongoose = require("mongoose");

<<<<<<< HEAD
const sponsorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    logo: { type: String }, // 🔥 sponsor logo
    tournamentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tournament",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sponsor", sponsorSchema);
=======
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
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
