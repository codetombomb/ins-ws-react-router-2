import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = ({ onLoginSubmit }) => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");

  const handleFormSubmit = () => {
    const credentials = {
      userName,
      passWord,
    };
    onLoginSubmit(credentials);
  };

  return (
    <div className="Login">
      <form onSubmit={handleFormSubmit}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={passWord}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input type="submit"></input>
        <p>
          Not a user? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
