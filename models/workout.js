const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  nameofexercise: {
    type: String
    // unique: true
  },
  weightforexercise: {
    type: Number
    // unique: true
  },
  numberofsets: {
    type: Number
    // unique: true
  },
  numberofrepetitions: {
    type: Number
    // unique: true
  },
  durationofexercise: {
    type: Number
    // unique: true
  }
  // exercise: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Exercise"
  //   }
  // ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
