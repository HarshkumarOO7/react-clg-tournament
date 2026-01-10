import { Routes, Route } from "react-router-dom";
import Header from "./component/Header.jsx";
import Home from "./screen/Home.jsx";
import Login from "./screen/Login.jsx";
import Registration from "./screen/Registration.jsx";
import Sponsors from "./screen/Sponsors.jsx";
import venue from "./screen/Venue.jsx";

function App() {
  return (
    <>
      {/* Header visible on all pages */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/venue" element={<venue/>} />
      </Routes>
    </>
  );
}

export default App;
