import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './screen/login.jsx'
import Home from   './screen/home.jsx'
import Reg from './screen/registration.jsx'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

function App() {
  const [name,setName]=useState("sanya shah!!! 😎");
  // const data = [{
  //   name:"a",
  //   no : 1132
  // },{
  //   name:"asew",
  //   no : 1
  // },{
  //   name:"adv ",
  //   no : 132
  // }]
  return (
    <>
      {/* <h1>Hello React 🚀</h1>

      <h2 className="name">Code with {name}</h2>
      <Home name={name} data={data} />
      <Login />
      <Reg /> */}
      <BrowserRouter>

        <link to = "/"> Home</link> &nbsp; &nbsp; &nbsp; 
        <link to = "/about"> About</link> &nbsp; &nbsp; &nbsp;
        <link to = "/contact"> Contact </link> &nbsp; &nbsp; &nbsp;
        <link to = "/login"> Login</link> &nbsp; &nbsp; &nbsp;
        <link to = "/registration"> Registration </link> &nbsp; &nbsp; &nbsp;

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/registration' element={<registration/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App