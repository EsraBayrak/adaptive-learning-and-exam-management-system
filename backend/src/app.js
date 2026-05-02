const express = require("express");
const cors = require("cors");

const courseRoutes = require("./routes/courseRoutes");
const taskRoutes = require("./routes/taskRoutes");
const examRoutes = require("./routes/examRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/courses", courseRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/exams", examRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});