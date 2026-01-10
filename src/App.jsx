<<<<<<< HEAD
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
=======
import { useState } from "react";
import Header from './component/Header.jsx';
import Home from "./screens/Home.jsx";
import Login from "./screens/Login.jsx";
import Registration from './screens/Registration.jsx';

function App() {
  const [name] = useState("Harsh Kumar 😎");

  return (
    <>
      <Header />
      <Home name={name} />
      <Login />
      <Registration />
>>>>>>> 15442af9baad8a860fe014023741827372057927
    </>
  );
}

export default App;
