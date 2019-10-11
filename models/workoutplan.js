const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  exercise: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise"
    }
  ]
});

const WorkoutPlan = mongoose.model("WorkoutPlan", WorkoutSchema);

module.exports = WorkoutPlan;


// ############################################

// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//   name: {
//     type: String,
//     unique: true
//   },
//   notes: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Note"
//     }
//   ]
// });

// const User = mongoose.model("User", UserSchema);

// module.exports = User;
