import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

const Home = ({ currentUser }) => {
  const [showLogin, setShowLogin] = useState(true);
  return <div style={{width: "100%"}}><Login /></div>;
};

export default Home;
