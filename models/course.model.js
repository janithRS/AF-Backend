const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Course name field cannot be empty"
  },
  courseId: {
    type: String,
    required: "Course Id field cannot be empty"
  },
  courseInstructor: {
    type: mongoose.Schema.ObjectId,
    ref: "Instructor"
  },
  isEnabled: {
    type: String,
    default: "false"
  }
});

module.exports = mongoose.model("Course", CourseSchema);
