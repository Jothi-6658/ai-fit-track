const mongoose = require("mongoose");

const fitnessSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },

    weight: {
        type: Number,
        required: true
    },

    height: {
        type: Number,
        required: true
    },

    bmi: {
        type: Number
    },

    steps: {
        type: Number,
        default: 0
    },

    calories: {
        type: Number,
        default: 0
    },

    water: {
        type: Number,
        default: 0
    },

    workoutCompleted: {
        type: Number,
        default: 0
    },

    calorieGoal: {
        type: Number,
        default: 0
    }

}, { timestamps: true });

module.exports = mongoose.model("Fitness", fitnessSchema);