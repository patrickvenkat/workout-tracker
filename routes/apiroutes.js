var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

// Routes
// db.WorkoutPlan.create({ name: "My First Workout" })
//   .then(dbWorkoutPlan => {
//     console.log(dbWorkoutPlan);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });

app.get("/exercises", (req, res) => {
    db.Exercise.find({})
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  app.get("/workoutplan", (req, res) => {
    db.WorkoutPlan.find({})
      .then(dbWorkoutPlan => {
        res.json(dbWorkoutPlan);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  app.post("/exercise", ({ body }, res) => {
    console.log(body);
    db.Exercise.create(body)
      .then(dbExercise => {
        console.log("Done");
        res.redirect("../displayAllExercises");
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.post("/submitworkout", ({ body }, res) => {
    console.log(body);
    console.log(body.nameofexercise);
    // console.log(body.exerciseproperty[0]);
    db.WorkoutPlan.create(body)
      .then(dbWorkoutPlan => {
        console.log("Done");
        // res.redirect("../displayAllExercises");
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.get("/displayAllExercises", (req, res) => {
    console.log("Display All");
    // db.Exercise.find({}, (error, data) => {
    //   if (error) {
    //       res.json(error);
    //   } else {
    //     res.json(data);
    //   }
    // });
  });
  
  // app.post("/submit", ({ body }, res) => {
  //   db.Exercise.create(body)
  //     .then(({ _id }) => db.Exercise.findOneAndUpdate({}, { $push: { exercise: _id } }, { new: true }))
  //     .then(dbExercise => {
  //       res.json(dbExercise);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });
  
  app.get("/populatedworkout", (req, res) => {
    db.User.find({})
      .populate("exercise")
      .then(dbWorkoutPlan => {
        res.json(dbWorkoutPlan);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  // db.User.create({ name: "Ernest Hemingway" })
  //   .then(dbUser => {
  //     console.log(dbUser);
  //   })
  //   .catch(({ message }) => {
  //     console.log(message);
  //   });
  
  // app.get("/notes", (req, res) => {
  //   db.Note.find({})
  //     .then(dbNote => {
  //       res.json(dbNote);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });
  
  // app.get("/user", (req, res) => {
  //   db.User.find({})
  //     .then(dbUser => {
  //       res.json(dbUser);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });
  
  // app.post("/submit", ({ body }, res) => {
  //   db.Note.create(body)
  //     .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
  //     .then(dbUser => {
  //       res.json(dbUser);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });
  
  // app.get("/populateduser", (req, res) => {
  //   db.User.find({})
  //     .populate("notes")
  //     .then(dbUser => {
  //       res.json(dbUser);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });
};