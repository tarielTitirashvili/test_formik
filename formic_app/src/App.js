import "./App.css";
import YoutubeForm from "./components/youtubeForm";
import { NavLink, Route, Routes } from "react-router-dom"
import FormContainer from "./components/afterBases/formContainer";

function App() {
  return (
    <div>
      <header >
        <div className="header">
          <NavLink to={"/youtube"}>youtubeForm</NavLink>
          <NavLink to={"/"}>login</NavLink>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<FormContainer/>} />
        <Route path="/youtube" element={<YoutubeForm/>} />
      </Routes>
    </div>
  );
}

export default App;
