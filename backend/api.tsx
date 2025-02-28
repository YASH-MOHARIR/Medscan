import axios from "axios";
import { PatientData } from "../src/NewProfile/types";

// Replace with your backend URL; if local, use http://localhost:5000
const API_URL = "http://localhost:5000";

export const createPatientRecord = async (patientData: PatientData) => {
  const response = await axios.post(`${API_URL}/patients`, patientData);
  return response.data;
};

export const getPatientRecord = async (id: string) => {
  const response = await axios.get(`${API_URL}/patients/${id}`);
  return response.data;
};
