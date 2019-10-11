const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  // title: String,
  exercise:{
    type: String,
    unique: true
}
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const NoteSchema = new Schema({
//   title: String,
//   body: String
// });

// const Note = mongoose.model("Note", NoteSchema);

// module.exports = Note;
