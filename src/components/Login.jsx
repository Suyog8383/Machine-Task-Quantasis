import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import { useSelector } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emails = useSelector((state) => state.reducer.emailList);
  const passs = useSelector((state) => state.reducer.passList);
  const auths = useSelector((state) => state.reducer.authList);

  const handleInput = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      console.log("@SN error: invalid email format");
      return;
    }

    for (let i = 0; i < emails.length; i++) {
      if (
        emails[i].includes(email) &&
        passs[i].includes(password) &&
        auths[i].includes("yes")
      ) {
        console.log("@SN success");
        return;
      }
    }

    console.log("@SN error: invalid credentials or authorization");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleInput}>
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Link onClick={handleInput}>Login</Link>
        <Link to="register">Register</Link>
      </form>
    </div>
  );
}

export default Login;
