import { useState } from "react";
import Header from "./component/Header.jsx";
import Home from "./screen/Home.jsx";
import Login from "./screen/Login.jsx";
import Registration from "./screen/Registration.jsx";
import Venue from "./screen/Venue.jsx";

function App() {
  const [name] = useState("Harsh Kumar 😎");

  return (
    <>
      <Header />
      <Home name={name} />
      {/* <Login />
      <Registration /> */}
      <Venue/>
    </>
  );
}

export default App;