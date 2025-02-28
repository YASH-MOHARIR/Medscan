import { AppointmentCard } from "./AppointmentCard"


const sampleAppointmentsData = [
  {
    date: "2022-01-01",
    time: "10:00 AM",
    doctor: "Dr. Smith",
    speciality: "Cardiology",
    vitals: {
      heartRate: 80,
      temperature: 98.6,
      bloodPressure: "120/80",
    },
    prescriptions: [
      {
        medcineName: "Aspirin",
        dosage: "100mg",
      },
      {
        medcineName: "Lisinopril",
        dosage: "10mg"
      },
    ],
  },
  {
    date: "2022-01-02",
    time: "2:30 PM",
    doctor: "Dr. Johnson",
    speciality: "Dermatology",
    vitals: {
      heartRate: 75,
      temperature: 98.2,
      bloodPressure: "110/70",
    },
    prescriptions: [
      {
        medcineName: "Hydrocortisone",
        dosage: "1%", 
      },
    ],
  },
];

export const Appointments = () => {
  return (
    <>
    <h1>Appointments</h1>
      {sampleAppointmentsData.map((appointment, index) => (
        <AppointmentCard key={index} appointmentData={appointment} />
      ))}
    </>
  );
}
