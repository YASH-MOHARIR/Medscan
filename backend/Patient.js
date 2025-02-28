import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: String,
  age: Number,
  dateOfBirth: String,
  gender: String,
  bloodType: String,
  medicalConditions: [String],
  allergies: [String],
  contactInfo: {
    phone: String,
    email: String,
    address: String
  },
  detailedMedicalHistory: {
    pastSurgeries: [String],
    immunizations: [String],
    familyHistory: [String],
    socialHistory: {
      smoking: String,
      alcohol: String,
      exercise: String
    }
  },
  medicationHistory: [
    {
      name: String,
      dosage: String,
      frequency: String
    }
  ],
  emergencyContacts: [
    {
      name: String,
      relationship: String,
      phone: String
    }
  ]
});

const Patient = mongoose.model("Patient", PatientSchema);

export default Patient;