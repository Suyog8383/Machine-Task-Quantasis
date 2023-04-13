import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { emailData, passData, authData } from "./Register.slice";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState("yes");
  const [mess, setMess] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    dispatch(emailData({ emails: [email] }));
    dispatch(passData({ passwords: [password] }));
    dispatch(authData({ auths: [auth] }));
    setMess("Successfully added");
    setEmail("");
    setPassword("");
  };
  let dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <h1>Register</h1>
        <form onSubmit={handleInput} style={{ width: "min-content" }}>
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
          <div>
            <label htmlFor="Yes" style={{ padding: "5px" }}>
              Yes
            </label>
            <input
              type="radio"
              name="btn"
              id="yes"
              value="yes"
              onChange={(e) => setAuth(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="No" style={{ padding: "5px" }}>
              No
            </label>
            <input
              type="radio"
              name="btn"
              value="no"
              id="no"
              onChange={(e) => setAuth(e.target.value)}
            />
          </div>

          <div style={{ display: "flex", gap: "23px", padding: "10px" }}>
            <button type="submit" className="btn btn-danger">
              submit
            </button>
            <Link to="/">
              <button className="btn btn-warning">Login</button>
            </Link>
          </div>
        </form>
        {mess}
      </div>
    </div>
  );
}

export default Register;
