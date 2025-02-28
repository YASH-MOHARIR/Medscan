const Header = () => {
  return (
    <div className="header">
      
      <div className="logo">
        <img src="/images/logo.png" className="logo-icon " alt="" />
        <p className="logo-text">
          Med
          <span>Scan</span>
        </p>
      </div>

      <div className="about-patient">
        <img className="icon user mb-3" src="/icons/user.svg" alt="user" />
        <h5 className="patient-name">Yash Manish Moharir</h5>
        <hr />
        <p className="patient-id">P.ID : 123456</p>
        <p className="gender"> Male</p>
        <p className="age"> 25</p>
      </div>

      <nav className="navigation" id="navigation">
        <ul className="nav-links ">
          <li className="nav-link">
            <a href="#about">About</a>
          </li>
          <li className="nav-link">
            <a href="#appointments">Appointments</a>
          </li>
          <li className="nav-link">
            <a href="#specimens">Specimens</a>
          </li>
        </ul>
      </nav>
      <hr />

      <button className="  glassmorph glass-red-btn">LOGOUT</button>
    </div>
  );
};

export default Header;
