const express = require("express");
const {
  getStudentById,
  getStudents,
  createStudent,
  removeStudent,
  updateStudent,
  getHighAvgStudents
} = require("../modules/studentsModule.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const students = await getStudents();
    res.json(students);
  } catch (error) {
    res.status(500).send({ message: error.message || "Internal Server Error" });
  }
});

router.get("/HighAvg", async (req,res)=>{
    try{
        const students = await getHighAvgStudents()
        res.json(students)
    } catch (error){
        res.status(500).send({message:error.message || 'no students with high avg grade'})

    }
})

router.get("/:studentId", async (req, res) => {
  try {
    const student = await getStudentById(req.params.studentId);
    res.json(student);
  } catch (error) {
    res.status(500).send({ message: error.message || "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { id,avg,course,fullName } = req.body; // Assuming the student id,avg,course,fullName is sent in the body
    const newStudent = await createStudent(id,avg,course,fullName);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).send({ message: error.message || "Internal Server Error" });
  }
});

router.delete("/:studentId", async (req, res) => {
  try {
    await removeStudent(req.params.studentId);
    res.status(200).send({ message: "Student successfully deleted" });
  } catch (error) {
    res.status(500).send({ message: error.message || "Internal Server Error" });
  }
});

router.put("/:studentId", async (req, res) => {
  try {
    const updates = req.body;
    await updateStudent(req.params.studentId, updates);
    res.status(200).send({ message: "Student updated successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message || "Internal Server Error" });
  }
});

module.exports = router;
