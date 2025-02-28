import { specimenType } from "./Specimens";

export const SpecimenCard = ({ specimenData }: { specimenData: specimenType }) => {
  return (
    <div className={`specimen-card glassmorph col-3  `}>
      <img className="specimen-icon icon" src="/icons/blood-test-tube-alt.svg" alt="" />
      <div className="details">
        <p>Sample Type : {specimenData.specimenName}</p>
        <p>Date : {specimenData.Date}</p>
        <p>Time : {specimenData.Time}</p>
        <button className="glassmorph glass-blue-btn mt-2">Test Results</button>
      </div>
    </div>
  );
};
