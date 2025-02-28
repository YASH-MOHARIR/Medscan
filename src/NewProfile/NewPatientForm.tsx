import React, { useState, ChangeEvent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicInfoStep from "./BasicInfoStep";
import ContactAndHistoryStep from "./ContactAndHistoryStep";
import MedicationAndEmergencyStep from "./MedicationAndEmergencyStep";
import { updateNestedState } from "./updateNestedState";
import { PatientData } from "./types";
import {createPatientRecord,getPatientRecord} from '../../backend/api';

const NewPatientForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [patientData, setPatientData] = useState<PatientData>({
    id: "patient_12345",
    name: "John Doe",
    age: 45,
    dateOfBirth: "1980-01-01",
    gender: "Male",
    bloodType: "O+",
    medicalConditions: ["Hypertension", "Diabetes"],
    allergies: ["Penicillin"],
    contactInfo: {
      phone: "555-1234",
      email: "johndoe@example.com",
      address: "123 Main St, Anytown, USA",
    },
    detailedMedicalHistory: {
      pastSurgeries: ["Appendectomy (2005)"],
      immunizations: ["Influenza (2023)", "COVID-19 (2021)"],
      familyHistory: ["Diabetes", "Heart Disease"],
      socialHistory: {
        smoking: "Never",
        alcohol: "Occasionally",
        exercise: "Regular",
      },
    },
    medicationHistory: [
      {
        name: "Metformin",
        dosage: "500mg",
        frequency: "Twice daily",
      },
    ],
    emergencyContacts: [
      {
        name: "Jane Doe",
        relationship: "Spouse",
        phone: "555-6789",
      },
    ],
  });

  // General change handler with dot-notation support.
  const handleGeneralChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    let newValue: number | string = value;
    if (type === "number") newValue = parseInt(value);
    setPatientData((prev) => updateNestedState(prev, name, newValue));
  };

  // Handler for comma-separated fields.
  const handleCommaSeparated = (
    e: ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const values = e.target.value.split(",").map((v) => v.trim());
    setPatientData((prev) => updateNestedState(prev, field, values));
  };

  // Basic information validation.
  const validateBasicInfo = (): { [key: string]: string } => {
    const newErrors: { [key: string]: string } = {};
    if (!patientData.name.trim()) newErrors.name = "Name is required.";
    if (!patientData.age || patientData.age <= 0)
      newErrors.age = "Age must be greater than 0.";
    if (!patientData.dateOfBirth)
      newErrors.dateOfBirth = "Date of birth is required.";
    if (!patientData.gender) newErrors.gender = "Gender is required.";
    if (!patientData.bloodType.trim())
      newErrors.bloodType = "Blood type is required.";
    return newErrors;
  };

  const nextStep = () => {
    // Validate basic info on step 1
    if (currentStep === 0) {
      const basicErrors = validateBasicInfo();
      if (Object.keys(basicErrors).length > 0) {
        setErrors(basicErrors);
        return;
      } else {
        setErrors({});
      }
    }
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const handleFormSubmit = async () => {
    try {
      // Create a new patient record
      const createdRecord = await createPatientRecord(patientData);
      console.log("Patient created:", createdRecord);
  
      // Optionally, retrieve the created record to verify
      const fetchedRecord = await getPatientRecord(createdRecord.id);
      console.log("Patient retrieved:", fetchedRecord);
    } catch (error) {
      console.error("Error with patient operations:", error);
    }
    
  }

  return (
    <div className=" new-patient-form-main    ">
    <div className=" new-patient-form   w-50 mt-4 glassmorph-nohover">

      <h2>Patient Form - Step {currentStep + 1} of 3</h2>
      <div className="new-pateient form">
        {currentStep === 0 && (
          <BasicInfoStep
            patientData={patientData}
            handleGeneralChange={handleGeneralChange}
            handleCommaSeparated={handleCommaSeparated}
            errors={errors}
          />
        )}
        {currentStep === 1 && (
          <ContactAndHistoryStep
            patientData={patientData}
            handleGeneralChange={handleGeneralChange}
            handleCommaSeparated={handleCommaSeparated}
          />
        )}
        {currentStep === 2 && (
          <MedicationAndEmergencyStep
            patientData={patientData}
            handleGeneralChange={handleGeneralChange}
          />
        )}
        <hr />
        <div className="action-step-btns  mt-3">
          {currentStep > 0 && (
            <button type="button" className="glass-red-btn col-5" onClick={prevStep}>
              Back
            </button>
          )}
          {currentStep < 2 ? (
            <button type="button" className="glass-blue-btn col-5" onClick={nextStep}>
              Next
            </button>
          ) : (
            <button onClick={handleFormSubmit} className="glass-green-btn col-5">
              Submit
            </button>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default NewPatientForm;
