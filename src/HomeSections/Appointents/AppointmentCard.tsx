import { PrescriptionCard, prescriptionProps } from "./PrescriptionCard";

type appointmentProps = {
  date: string;
  time: string;
  doctor: string;
  speciality: string;
  vitals: {
    heartRate: number;
    temperature: number;
    bloodPressure: string;
  };
  prescriptions: prescriptionProps[];
};

export const AppointmentCard = ({ appointmentData }: { appointmentData: appointmentProps }) => {
  return (
    <div className="appointment-card glassmorph   mt-5">
      <div className="wrapper">
        <div className="date-time">
          <img className="icon" src="/icons/calendar-clock.svg" alt="" />
          <p>
            {appointmentData.date} • {appointmentData.time}
          </p>
        </div>

        <h4 className="my-3">
          {appointmentData.doctor} - {appointmentData.speciality}
        </h4>

        <div className="vitals mt-3">
          <div className="vital glassmorph">
            <i className="fi fi-sr-heart heart-icon icon"></i>
            <p>Heart Rate: {appointmentData.vitals.heartRate} bpm</p>
          </div>
          <div className="vital glassmorph">
          <i className="fi fi-rr-thermometer-half thermometer-icon icon"></i>            <p>Temperature: {appointmentData.vitals.temperature} F</p>
          </div>
          <div className="vital glassmorph">
            <img className="icon" src="/icons/heart-rate.svg" alt="" />
            <p>Blood Pressure:</p>
            <p>{appointmentData.vitals.bloodPressure}mmHg</p>
          </div>
        </div>

        <h4 className="mt-3">Prescriptions</h4>
        <div className="prescriptions">
          {appointmentData.prescriptions.map((prescription, index) => (
            <PrescriptionCard key={index} prescriptionData={prescription} />
          ))}
        </div>
      </div>
    </div>
  );
};
