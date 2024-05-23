const dbModule = require("./dbModule.js");
const { toObjectId, getCollection } = dbModule;

const collectionName = "students";

async function getStudents() {
  try {
    const collection = await getCollection(collectionName);

    const students = await collection.find().toArray();

    if (!students || students.length === 0) return null;
    return students;
  } catch (error) {
    console.log({ error });
  }
}

async function getHighAvgStudents() {
  try {
    const collection = await getCollection(collectionName);

    const students = await collection.find({ avg: { $gt: 74 } }).toArray();

    if (!students || students.length === 0) return null;
    return students;
  } catch (error) {
    console.log({ error });
  }
}

async function createStudent(id, avg, course, fullName) {
  try {
    const collection = await getCollection(collectionName);

    const student = {
      id: id,
      avg: avg,
      course: course,
      FullName: fullName,
    };

    const result = await collection.insertOne(student);
    student._id = result.insertedId;
    return student;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function removeStudent(studentId) {
  try {
    const collection = await getCollection(collectionName);
    await collection.deleteOne({ _id: toObjectId(studentId) });
  } catch (error) {
    throw error;
  }
}

async function updateStudent(studentId, updates) {
  try {
    const collection = await getCollection(collectionName);
    const updateResult = await collection.updateOne(
      { _id: toObjectId(studentId) },
      { $set: updates } // {txt: "", isDone: false/true}
    );

    if (updateResult.matchedCount === 0) {
      throw new Error("Student not found");
    }

    return { success: true, message: "Student updated successfully" };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getStudentById(studentId) {
  try {
    const collection = await getCollection(collectionName);
    const student = await collection.findOne({ _id: toObjectId(studentId) });
    if (!student) {
      throw new Error("Student not found");
    }
    return student;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  getStudentById,
  getStudents,
  createStudent,
  removeStudent,
  updateStudent,
  getHighAvgStudents,
};
