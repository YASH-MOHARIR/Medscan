import { useState } from "react";

export const NewSpecimen = () => {
  const [addingSpecimen, setAddingSpecimen] = useState<boolean>(false);

  const showSpecimenForm = () => {
    setAddingSpecimen((prev) => !prev);
  };

  const handleAddSpecimen = (formData: FormData) => {
    // get all form data
    const specimenName = formData.get("specimenName");
    const dateOfIssue = formData.get("dateOfIssue");
    const timeOfIssue = formData.get("timeOfIssue");
    console.log(specimenName, dateOfIssue, timeOfIssue);
  };

  return (
    <div className="new-specimen-form-wrapper">
      <button type="button" onClick={() => showSpecimenForm()} className="glassmorph tog gle-form-btn">
        {addingSpecimen ? "Cancel" : "Add"} Specimen Data
      </button>

      {addingSpecimen && (
        <form className="new-specimen-form" action={handleAddSpecimen}>
          
          <div className="form-inputs row">
            <div className="col">
              <label htmlFor="specimenName">Specimen Name:</label>
              <input type="text" placeholder="Specimen Name" name="specimenName" id="specimenName" className=" " />
            </div>

            <div className="col">
              <label htmlFor="date">Date of Issue:</label>
              <input type="date" placeholder="Date of Issue" name="dateOfIssue" id="date" className=" " />
            </div>

            <div className="col">
              <label htmlFor="time"> Time of Issue</label>
              <input type="time" placeholder="Time of Issue" name="timeOfIssue" id="time"  />
            </div>
          </div>

          <button type="submit" className="add-btn">
            Add Specimen
          </button>

          <hr />
        </form>
      )}
    </div>
  );
};
