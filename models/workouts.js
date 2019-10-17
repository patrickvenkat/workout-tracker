const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Workouts = new Schema({
  nameofworkout: {
    type: String
    // unique: true
  },
  duration: {
    type: String
    // unique: true
  },
  reps: {
    type: Integer
    // unique: true
  }
  // exercise: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Exercise"
  //   }
  // ]
});

const WorkoutPlan = mongoose.model("WorkoutPlan", Workouts);

module.exports = WorkoutPlan;
