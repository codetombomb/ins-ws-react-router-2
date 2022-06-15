import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../src/Components/Home/Home";
import Login from "../src/Components/Login/Login";
import SignUp from "../src/Components/SignUp/SignUp";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState({})

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home currentUser={currentUser}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
