import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { emailData, passData, authData } from "./Register.slice";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState("yes");

  const handleInput = (e) => {
    e.preventDefault();
    dispatch(emailData({ emails: [email] }));
    dispatch(passData({ passwords: [password] }));
    dispatch(authData({ auths: [auth] }));
  };
  let dispatch = useDispatch();

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleInput}>
        <label htmlFor="">Email</label>
        <input
          type="email"
          value={email}
          placeholder="enter email"
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
        <label htmlFor="">IsAuthorised </label>
        <label htmlFor="Yes">Yes</label>
        <input
          type="radio"
          name="btn"
          id="yes"
          value="yes"
          onChange={(e) => setAuth(e.target.value)}
        />
        <label htmlFor="No">No</label>
        <input
          type="radio"
          name="btn"
          value="no"
          id="no"
          onChange={(e) => setAuth(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      <Link to="/">Login</Link>
    </div>
  );
}

export default Register;
