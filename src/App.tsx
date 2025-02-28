import "./styles.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router";
import { ScanBarcode } from "./ScanBarcode";
import Home from "./HomeSections/Home";
import "../node_modules/@flaticon/flaticon-uicons/css/all/all.css";
import NewPatientForm from "./NewProfile/NewPatientForm";


function App() {
  return (
    < >
      <BrowserRouter>
        <Routes>
          <Route path="/home/:uid" Component={Home} />
          <Route path="/new-profile" Component={NewPatientForm} />
          <Route path="/" Component={ScanBarcode} />
        </Routes>
      </BrowserRouter>
    </ >
  );
}

export default App;
