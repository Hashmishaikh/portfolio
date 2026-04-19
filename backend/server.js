import dotenv from "dotenv";
// Load environment variables first before any other imports
dotenv.config();

import express from "express";
import cors from "cors";
import contactusRoutes from "./routes/contactus.routes.js";

const app = express();
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:5000",
    "http://localhost:5173",
    "http://localhost:5175",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:5000",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:5175",
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  credentials: true,
  optionsSuccessStatus: 204,
};

// Middleware
app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;

app.use(express.json());

// Health check endpoint
app.get("/", (req, res) => {
    res.json({ message: "Server is running" });
});

app.use("/api/contactus", contactusRoutes);

// This must be last, after all other routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/dist/index.html"));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});