const examService = require("../services/examService");

const createExam = async (req, res) => {
  try {
    const result = await examService.createExam(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getExams = async (req, res) => {
  try {
    const result = await examService.getExams();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateExam = async (req, res) => {
  try {
    const result = await examService.updateExam(req.params.id, req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteExam = async (req, res) => {
  try {
    const result = await examService.deleteExam(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createExam,
  getExams,
  updateExam,
  deleteExam,
};