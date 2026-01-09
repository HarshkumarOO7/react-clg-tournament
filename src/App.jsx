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
    </>
  );
}

export default App;
