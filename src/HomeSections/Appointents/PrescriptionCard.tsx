export type prescriptionProps = {
  medcineName: string;
  dosage: string;
};

export const PrescriptionCard = ({ prescriptionData }: { prescriptionData: prescriptionProps }) => {
  return (
    <div className="prescription glassmorph">
      <img src="/icons/medicine-bottle.svg" className="icon" alt="" />
      <div className="prescription-details">
        <h6> {prescriptionData.medcineName}</h6>
        <p>{prescriptionData.dosage}</p>
      </div>
    </div>
  );
};
