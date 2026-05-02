const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database.sqlite", (err) => {
  if (err) {
    console.error("Database connection error:", err.message);
  } else {
    console.log("Connected to SQLite database.");
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS courses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      course_name TEXT NOT NULL,
      instructor TEXT,
      semester TEXT
    )
  `);
 db.run(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      course_id INTEGER,
      title TEXT NOT NULL,
      description TEXT,
      deadline TEXT,
      status TEXT,
      priority TEXT,
      FOREIGN KEY (course_id) REFERENCES courses(id)
    )
  `);
  db.run(`
  CREATE TABLE IF NOT EXISTS exams (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    course_id INTEGER,
    exam_title TEXT NOT NULL,
    exam_date TEXT,
    exam_type TEXT,
    location TEXT,
    FOREIGN KEY (course_id) REFERENCES courses(id)
  )
`);

});

module.exports = db;