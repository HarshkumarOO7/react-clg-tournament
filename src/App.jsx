import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './screen/login.jsx'
import Home from   './screen/home.jsx'
import Reg from './screen/registration.jsx'

function App() {
  const [name,setName]=useState("HarshKumar!!! 😎");
  const data = [{
    name:"a",
    no : 1132
  },{
    name:"asew",
    no : 1
  },{
    name:"adv ",
    no : 132
  }]
  return (
    <>
      <h1>Hello React 🚀</h1>

      <h2 className="name">Code with {name}</h2>
      <Home name={name} data={data} />
      <Login />
      <Reg />
    </>
  )
}

export default App
