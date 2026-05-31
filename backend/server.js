const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

<<<<<<< HEAD
const http = require("http");
const { Server } = require("socket.io");

const app = express();

/* ================= CREATE SERVER ================= */
const server = http.createServer(app);

/* ================= SOCKET.IO ================= */
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

// 🔥 Store connected users
let users = {};

io.on("connection", (socket) => {
  console.log("🔌 User connected:", socket.id);

  // Register user
  socket.on("register", (userId) => {
    users[userId] = socket.id;
    console.log("✅ User registered:", userId);
  });

  // Register for analytics updates
  socket.on("register-analytics", (data) => {
    console.log("📊 Analytics registered for user:", data?.userId || "unknown");
    socket.join("analytics-room");
  });

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);

    for (let userId in users) {
      if (users[userId] === socket.id) {
        delete users[userId];
      }
    }
  });
});

// 🔥 make available in routes
app.set("io", io);
app.set("users", users);

/* ================= CORS ================= */
=======
const app = express();

/* ================= CORS (FIXED FOR NODE 24) ================= */
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

/* ================= MIDDLEWARE ================= */
app.use(express.json());

/* ================= ROUTES ================= */
<<<<<<< HEAD
app.use("/api", require("./routes/auth"));
app.use("/api/profile", require("./routes/profile"));

app.use("/api/users", require("./routes/userRouter"));
app.use("/api/sports", require("./routes/sportRouter"));
app.use("/api/teams", require("./routes/teamRouter"));
app.use("/api/tournaments", require("./routes/tournamentRoutes"));
app.use("/api/matches", require("./routes/matchRouter"));
app.use("/api/registrations", require("./routes/registrationRouter"));
app.use("/api/venues", require("./routes/venueRouter"));
app.use("/api/sponsors", require("./routes/sponsorRouter"));
app.use("/api/cog", require("./routes/cogRouter"));
// app.use("/api/notifications", require("./routes/notificationRouter"));

// Analytics Routes - Real-time dashboard stats
app.use("/api/analytics", require("./routes/analyticsRouter"));

app.use("/uploads", express.static("uploads"));

/* ================= TEST ROUTE ================= */
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ 
    status: "healthy", 
    mongodb: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    timestamp: new Date().toISOString()
  });
});
=======
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");

app.use("/api", authRoutes);
app.use("/api/profile", profileRoutes);
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0

/* ================= DATABASE ================= */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

<<<<<<< HEAD
/* ================= ERROR HANDLER ================= */
app.use((err, req, res, next) => {
  console.error("UNHANDLED ERROR:", err);

  if (err && err.name === "MulterError") {
    return res.status(400).json({ message: err.message });
  }

  // Handle validation errors
  if (err && err.name === "ValidationError") {
    return res.status(400).json({ message: err.message });
  }

  // Handle duplicate key errors
  if (err && err.code === 11000) {
    return res.status(400).json({ message: "Duplicate entry found" });
  }

  res.status(500).json({ message: err.message || "Internal Server Error" });
=======
/* ================= TEST ROUTE ================= */
app.get("/", (req, res) => {
  res.send("Backend is running");
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
});

/* ================= START SERVER ================= */
const PORT = process.env.PORT || 5000;
<<<<<<< HEAD

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Frontend URL: http://localhost:5173`);
  console.log(`📡 Socket.IO ready for real-time updates`);
  console.log(`📊 Analytics endpoint: http://localhost:${PORT}/api/analytics/stats`);
});
=======
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
>>>>>>> afacff30c05aff69d1f51a582bc22e00fa64d1e0
