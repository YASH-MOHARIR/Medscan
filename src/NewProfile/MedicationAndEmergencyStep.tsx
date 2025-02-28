import React, { ChangeEvent } from "react";
import { PatientData } from "./Types";

interface MedicationAndEmergencyStepProps {
  patientData: PatientData;
  handleGeneralChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
}

const MedicationAndEmergencyStep: React.FC<MedicationAndEmergencyStepProps> = ({
  patientData,
  handleGeneralChange,
}) => {
  return (
    <div>
      <h4>Medication History</h4>
      <div className="mb-3">
        <label>Medication Name</label>
        <input
          type="text"
          className="form-control"
          name="medicationHistory.0.name"
          value={patientData.medicationHistory[0]?.name || ""}
          onChange={handleGeneralChange}
        />
      </div>
      <div className="mb-3">
        <label>Dosage</label>
        <input
          type="text"
          className="form-control"
          name="medicationHistory.0.dosage"
          value={patientData.medicationHistory[0]?.dosage || ""}
          onChange={handleGeneralChange}
        />
      </div>
      <div className="mb-3">
        <label>Frequency</label>
        <input
          type="text"
          className="form-control"
          name="medicationHistory.0.frequency"
          value={patientData.medicationHistory[0]?.frequency || ""}
          onChange={handleGeneralChange}
        />
      </div>
      <h4>Emergency Contacts</h4>
      <div className="mb-3">
        <label>Contact Name</label>
        <input
          type="text"
          className="form-control"
          name="emergencyContacts.0.name"
          value={patientData.emergencyContacts[0]?.name || ""}
          onChange={handleGeneralChange}
        />
      </div>
      <div className="mb-3">
        <label>Relationship</label>
        <input
          type="text"
          className="form-control"
          name="emergencyContacts.0.relationship"
          value={patientData.emergencyContacts[0]?.relationship || ""}
          onChange={handleGeneralChange}
        />
      </div>
      <div className="mb-3">
        <label>Phone</label>
        <input
          type="text"
          className="form-control"
          name="emergencyContacts.0.phone"
          value={patientData.emergencyContacts[0]?.phone || ""}
          onChange={handleGeneralChange}
        />
      </div>
    </div>
  );
};

export default MedicationAndEmergencyStep;
