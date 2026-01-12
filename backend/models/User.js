const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: String,
  gender: String,
  phoneNumber: String,
  location: String,
  description: String,

  // ✅ PROFILE IMAGE (NEW)
  profileImage: {
    type: String, // store image URL or filename
    default: "",  // empty if user has no image
  },

  sports: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Sport" }
  ],

  role: {
    type: String,
    enum: ["player", "coach", "organizer", "admin"],
    default: "player",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
