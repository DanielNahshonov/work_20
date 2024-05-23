const dotenv = require("dotenv")
dotenv.config()

const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()
const port = process.env.PORT || 3000
const studentRoutes = require("./api/studentRoutes.js")

app.use(express.static("public"))
app.use(express.json())

const corsOptions = {
  origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
}
app.use(cors(corsOptions))

app.get("/", (req, res) => {
  res.json("Welcome to the Student API")
})

app.use("/api/students", studentRoutes)

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`)
})