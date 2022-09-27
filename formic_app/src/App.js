import "./App.css";
import YoutubeForm from "./components/youtubeForm";
import { NavLink, Route, Routes } from "react-router-dom";
import UsageFormControls from "./components/afterBases/usageFormControls";
import LoginForm from "./components/afterBases/loginForm";

function App() {
  return (
    <div>
      <header>
        <div className="header">
          <NavLink to={"/login"}>login</NavLink>
          <NavLink to={"/youtube"}>youtubeForm</NavLink>
          <NavLink to={"/"}>usage testing</NavLink>
        </div>
      </header>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/youtube" element={<YoutubeForm />} />
        <Route path="/" element={<UsageFormControls />} />
      </Routes>
    </div>
  );
}

export default App;
