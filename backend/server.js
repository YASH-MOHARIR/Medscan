// server.js
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import  Patient  from "./Patient.js";
import dotenv from "dotenv";

dotenv.config();
 
const app = express();
app.use(cors());
app.use(bodyParser.json());

const conn = "mongodb+srv://yash:qwerty%40123@medscan-db.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000";
// Connect to Cosmos DB via the MongoDB API using Mongoose.
//   .connect(process.env.MONGODB_URI, {
mongoose
  .connect(conn, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Cosmos DB via MongoDB API"))
  .catch((err) => console.error("Error connecting to Cosmos DB:", err));

// Endpoint to create a new patient document
app.post("/patients", async (req, res) => {
  try {
    const patientData = req.body;
    // Ensure a unique id is set (you can also use a library like uuid)
    if (!patientData.id) {
      patientData.id = new mongoose.Types.ObjectId().toHexString();
    }
    const patient = new Patient(patientData);
    await patient.save();
    res.status(201).json(patient);
  } catch (error) {
    console.error("Error creating patient:", error);
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to retrieve a patient document by id
app.get("/patients/:id", async (req, res) => {
  try {
    const patient = await Patient.findOne({ id: req.params.id });
    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }
    res.json(patient);
  } catch (error) {
    console.error("Error fetching patient:", error);
    res.status(500).json({ error: error.message });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
