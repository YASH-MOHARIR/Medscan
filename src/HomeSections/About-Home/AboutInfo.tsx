// Types and Interfaces
export interface ProfileData {
  fullName: string;
  height: number;
  weight: number;
  age: number;
  gender: string;
  bloodGroup: string;
  allergies: string;
  previousHealthCondition: string;
}

// Profile Display Component
const AboutInfo: React.FC<{ data: ProfileData }> = ({ data }) => {
  return (
    <div className="about-main col-7">
      <h1>About</h1>

      <div className="mb-4 general-info card-body glassmorph">
        <h3 className="h5">Personal Details</h3>
        <hr />

        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row">
              <div className="col">Height :</div>
              <div className="col">{data.height} Cms</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-4">Weight :</div>
              <div className="col-8">{data.weight} Kgs</div>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row">
              <div className="col-4">Age :</div>
              <div className="col-8">{data.age}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="glassmorph">
        <h3 className="h5">Addition Information</h3>
        <hr />
        <div className="row mb-2">
          <div className="col-4">Blood Group :</div>
          <div className="col-8">{data.bloodGroup}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4">Allergies :</div>
          <div className="col-8">{data.allergies}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4">Previous Health Condition :</div>
          <div className="col-8">{data.previousHealthCondition}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
