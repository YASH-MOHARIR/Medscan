import AboutInfo, { ProfileData } from "./About-Home/AboutInfo";
import { Appointments } from "./Appointents/Appointments";
import Specimens from "./Specimens/Specimens";
import { TodoList } from "./About-Home/TodoList";
import Header from "../Header";

const sampleData: ProfileData = {
  fullName: "Yash Manish Moharir",
  height: 120,
  weight: 56,
  age: 20,
  gender: "Male",
  bloodGroup: "B+",
  allergies: "Dust,pollen",
  previousHealthCondition: "Asthama",
};

const Home = () => {
  return (
    <main data-spy="scroll" data-target="#navigation" data-offset="0" >
      <Header/>
    <div className="home">
      <section className="mb-5 row" id="about">
        
        <AboutInfo data={sampleData} />
        <TodoList />
      </section>
      <section className="mb-5" id="appointments">
        <Appointments />
      </section>
      <section className="" id="specimens">
         <Specimens />
      </section>
    </div>
    </main>
  );
};

export default Home;
