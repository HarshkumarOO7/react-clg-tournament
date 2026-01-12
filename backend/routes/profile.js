const express = require("express");
const router = express.Router();
const User = require("../models/User");
const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

// ================= UPDATE PROFILE =================
router.put(
  "/update",
  auth, // 🔐 JWT protection
  upload.single("profileImage"),
  async (req, res) => {
    try {
      // 🔍 Debug (remove later if you want)
      console.log("USER FROM TOKEN:", req.user);
      console.log("BODY:", req.body);
      console.log("FILE:", req.file);

      const updates = {};

      // ✅ Only update fields if they exist
      if (req.body.name) updates.name = req.body.name;
      if (req.body.phoneNumber) updates.phoneNumber = req.body.phoneNumber;
      if (req.body.gender) updates.gender = req.body.gender;
      if (req.body.location) updates.location = req.body.location;
      if (req.body.description) updates.description = req.body.description;

      // ✅ Profile image (Cloudinary URL)
      if (req.file && req.file.path) {
        updates.profileImage = req.file.path;
      }

      // ❌ No updates sent
      if (Object.keys(updates).length === 0) {
        return res.status(400).json({
          message: "No profile data provided to update",
        });
      }

      const user = await User.findByIdAndUpdate(
        req.user.userId, // comes from JWT
        updates,
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      res.status(200).json({
        message: "Profile updated successfully",
        user,
      });
    } catch (err) {
      console.error("❌ PROFILE UPDATE ERROR:", err);
      res.status(500).json({
        message: "Profile update failed",
      });
    }
  }
);

module.exports = router;
