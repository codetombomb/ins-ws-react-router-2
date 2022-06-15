import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = ({ onSignUpSubmit }) => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  const handleFormSubmit = () => {
    // handle password confirmation
    const credentials = {
      userName,
      passWord,
      confirmPw,
    };
    onSignUpSubmit(credentials);
  };

  return (
    <div className="Login">
      <form onSubmit={handleFormSubmit}>
        <h1>Sign Up</h1>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPw}
          onChange={(e) => setConfirmPw(e.target.value)}
        ></input>
        <input type="submit"></input>
        <p>
          Already a user? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
