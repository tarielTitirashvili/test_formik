import "./App.css";
import YoutubeForm from "./components/youtubeForm";
import { NavLink, Route, Routes } from "react-router-dom";
import UsageFormControls from "./components/afterBases/usageFormControls";
import LoginForm from "./components/afterBases/loginForm";
import Registration from "./components/afterBases/registration";
import EnrollmentFrom from "./components/afterBases/enrollmentFrom";

function App() {
  return (
    <div>
      <header>
        <div className="header">
          <NavLink to={"/enrollmentFrom"}>EnrollmentFrom</NavLink>
          <NavLink to={"/registration"}>Registration</NavLink>
          <NavLink to={"/login"}>login</NavLink>
          <NavLink to={"/youtube"}>youtubeForm</NavLink>
          <NavLink to={"/"}>usage testing</NavLink>
        </div>
      </header>
      <Routes>
        <Route path="/enrollmentFrom" element={<EnrollmentFrom />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/youtube" element={<YoutubeForm />} />
        <Route path="/" element={<UsageFormControls />} />
      </Routes>
    </div>
  );
}

export default App;
