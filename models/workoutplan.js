const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  nameofworkout: {
    type: String
    // unique: true
  },
  exercisename: {
    type: String
    // unique: true
  },
  exerciseproperty: {
    type: Array
    // unique: true
  }
  // exercise: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Exercise"
  //   }
  // ]
});

const WorkoutPlan = mongoose.model("WorkoutPlan", WorkoutSchema);

module.exports = WorkoutPlan;
