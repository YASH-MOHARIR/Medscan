import React from "react";
import { Link } from "react-router";

export const ScanBarcode = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="scan-barcode ">
      <div className=" login-card glassmorph-nohover">

        <i className="fi fi-rs-barcode-read barcode-icon"></i>
        <h1>Scan Barcode</h1>
        
        <form className="scan-form glassmorph" onSubmit={handleSubmit}>
          <input className="mx-2" type="text" placeholder="Enter barcode" />
          <button className="  glassmorph glass-green-btn">Submit</button>
        </form>

        <div className="scan-action-btns">
          <button className="glassmorph">
            
            <img className="icon" src="/icons/camera.svg" alt="" />
            <p className="mx-2">Scan Barcode</p>
          </button>
          <Link className="new-profile-btn" to="/new-profile">
            <button className=" glassmorph">
              <i className="fi fi-br-add icon glass-green-btn ml-3"></i>
              <p className="mx-2">New Profile</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
