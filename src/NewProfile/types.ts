export interface PatientData {
    id: string;
    name: string;
    age: number;
    dateOfBirth: string;
    gender: string;
    bloodType: string;
    medicalConditions: string[];
    allergies: string[];
    contactInfo: {
      phone: string;
      email: string;
      address: string;
    };
    detailedMedicalHistory: {
      pastSurgeries: string[];
      immunizations: string[];
      familyHistory: string[];
      socialHistory: {
        smoking: string;
        alcohol: string;
        exercise: string;
      };
    };
    medicationHistory: {
      name: string;
      dosage: string;
      frequency: string;
    }[];
    emergencyContacts: {
      name: string;
      relationship: string;
      phone: string;
    }[];
  }
  