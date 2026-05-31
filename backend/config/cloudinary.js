const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
<<<<<<< HEAD
  secure: true,
});

module.exports = cloudinary;
=======
});

module.exports = cloudinary;
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
