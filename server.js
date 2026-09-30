const express = require("express");
const mongoose = require("mongoose");
const User = require("./User");
const Fitness = require("./fitness");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json()); 
const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully!");
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });

    // Register API
app.post("/api/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already registered"
            });
        }

        const user = new User({
            name,
            email,
            password
        });

        await user.save();

        res.json({
            success: true,
            message: "Registration successful!"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});


// Login API
app.post("/api/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email, password });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password."
            });
        }

        res.json({
            success: true,
            message: "Login successful!"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// Fitness API
app.post("/api/fitness", async (req, res) => {
    try {
        const {
            email,
            weight,
            height,
            bmi,
            steps,
            calories,
            water,
            workoutCompleted,
            calorieGoal
        } = req.body;

        const fitness = new Fitness({
            email,
            weight,
            height,
            bmi,
            steps,
            calories,
            water,
            workoutCompleted,
            calorieGoal
        });

        await fitness.save();

        res.json({
            success: true,
            message: "Fitness data saved successfully!"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// Test Route
app.get("/", (req, res) => {
    res.send("AI FitTrack Backend is running!");
});

// API Test Route
app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "AI FitTrack API is working!"
    });
});

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`AI FitTrack server running on http://localhost:${PORT}`);
});