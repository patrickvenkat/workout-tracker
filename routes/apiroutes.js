var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

// Routes
app.post("/addexercise", ({ body }, res) => {
  console.log(body);
  db.Exercise.create(body)
    .then(dbExercise => {
      console.log("Done");
      res.redirect("../exerciseall.html");
    })
    .catch(err => {
      res.json(err);
    });
});

app.post("/addworkout", ({ body }, res) => {
  console.log(body);
  db.Workout.create(body)
    .then(dbWorkout => {
      console.log("Done with workout");
      res.redirect("../workouts.html");
    })
    .catch(err => {
      res.json(err);
    });
});
  
  app.get("/api/workoutplans", (req, res) => {
    db.WorkoutPlan.find({})
      .then(dbWorkoutPlan => {
        res.json(dbWorkoutPlan);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  app.post("/createworkoutplan", ({ body }, res) => {
    console.log(body);
    console.log(body.exercisename);
    console.log(body.exerciseproperty[0]);
    db.WorkoutPlan.create(body)
      .then(dbWorkoutPlan => {
        console.log("Done");
        res.redirect("../workoutplansall.html");
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.get("/api/exercisesall", (req, res) => {
    console.log("Display All");
    db.Exercise.find({}, (error, data) => {
      if (error) {
          res.json(error);
      } else {
        return res.json(data);
      }
    });
  });

  app.get("/api/workoutall", (req, res) => {
    console.log("Display All");
    db.WorkoutPlan.find({}, (error, data) => {
      if (error) {
          res.json(error);
      } else {
        return res.json(data);
      }
    });
  });
};
