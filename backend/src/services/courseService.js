const db = require("../models/db");

const createCourse = (course) => {
  return new Promise((resolve, reject) => {
    const { course_name, instructor, semester } = course;

    db.run(
      "INSERT INTO courses (course_name, instructor, semester) VALUES (?, ?, ?)",
      [course_name, instructor, semester],
      function (err) {
        if (err) reject(err);
        else resolve({ id: this.lastID, course_name, instructor, semester });
      }
    );
  });
};

const getCourses = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM courses", [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

const updateCourse = (id, course) => {
  return new Promise((resolve, reject) => {
    const { course_name, instructor, semester } = course;

    db.run(
      "UPDATE courses SET course_name = ?, instructor = ?, semester = ? WHERE id = ?",
      [course_name, instructor, semester, id],
      function (err) {
        if (err) reject(err);
        else resolve({ id, course_name, instructor, semester });
      }
    );
  });
};

const deleteCourse = (id) => {
  return new Promise((resolve, reject) => {
    db.run("DELETE FROM courses WHERE id = ?", [id], function (err) {
      if (err) reject(err);
      else resolve({ message: "Course deleted successfully" });
    });
  });
};

module.exports = {
  createCourse,
  getCourses,
  updateCourse,
  deleteCourse,
};