import { Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";

import Home from "./screen/Home";
import Login from "./screen/Login";
import Registration from "./screen/Registration";
import Events from "./screen/Events";
import Schedule from "./screen/Schedule";
import Speakers from "./screen/Speakers";
import Gallery from "./screen/Gallery";
import Venue from "./screen/Venue";
import Sponsors from "./screen/Sponsors";
import Contact from "./screen/Contact";

import "./index.css";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />

        <Route path="/events" element={<Events />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
