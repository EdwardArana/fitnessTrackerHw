const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    day:{
        type: Date,
        default: Date.now
    },
    exercises:[{
        type: {
            type: String,
            trim: true,
            required: "Enter a exercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter name of exercise"
        },
        duration: {
            type: Number,
            required: "Enter duration of workout"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        distance: {
            type: Number
        }
    }]
}, {
    toJSON: {
        virtuals: true
    }
});