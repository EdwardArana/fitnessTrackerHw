const router = require("express").Router();
const { db } = require("../models/workout.js");
const workout = require("../models/workout.js");

router.post("/api/workout", (req, res) => {
    workout.create({})
    .then(dbWorkout => {

        res.json(dbWorkout);
    })
    .catch(err => {

        res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, parms }, res ) => {
    workout.findByIdAndUpdate(
        params.id, { $push: { exercise: body } }, { new: true, runValidators: true }
    )
    .then(dbWorkout => {

        res.json(dbWorkout);
    })
    .catch(err => {

        res.json(err);
    });
});

router.get("/api/workouts", (req, res) => {
    workout.find()
    .then(dbWorkout => {

        res.json(dbWorkout);
    })
    .catch(err => {

        res.json(err);
    });
});

router.get("/api/workouts/range", ({ query }, res) => {
    workout.find({ day: {$gte: query.start, $lte: query.end} })
    .then(dbWorkout => {

        res.json(dbWorkout);
    })
    .catch(err => {

        res.json(err);
    });
});

router.delete("/api/workouts", ({ body }, res) => {
    workout.findByIdAndDelete(body.id)
    .then(() => {

        res.json(true);
    })
    .catch(err => {

        res.json(err);
    });
});

module.exports = router;