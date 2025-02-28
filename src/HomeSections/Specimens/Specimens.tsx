import { NewSpecimen } from "./NewSpecimen";
import { SpecimenCard } from "./SpecimenCard";

export type specimenType = {
  specimenId: string;
  specimenName: string;
  Date: string;
  Time: string;
};

const sampleData: specimenType[] = [
  {
    specimenId: "1",
    specimenName: "Blood",
    Date: "12/12/2021",
    Time: "12:00",
  },
  {
    specimenId: "2",
    specimenName: "Urine",
    Date: "12/12/2021",
    Time: "12:00",
  },
];

const Specimens = () => {
  return (
    <div>
              <h1>Specimens</h1>

        <NewSpecimen/>

      <div className="specimens glassmorph-nohover row gap-3 mt-5">
        {sampleData.map((specimen) => (
          <SpecimenCard key={specimen.specimenId} specimenData={specimen}  />
        ))}
      </div>

    </div>
  );
};

export default Specimens;
