const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

<<<<<<< HEAD
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization token missing" });
  }

  try {
    const token = authHeader.split(" ")[1];
    
=======
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { userId, role }
    next();
  } catch (err) {
<<<<<<< HEAD
    console.error("Auth error:", err);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
=======
    return res.status(401).json({ message: "Invalid token" });
  }
};
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
