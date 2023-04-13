import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const emails = useSelector((state) => state.reducer.emailList);
  const passs = useSelector((state) => state.reducer.passList);
  const auths = useSelector((state) => state.reducer.authList);

  console.log("@SN ", emails, passs, auths);

  const handleInput = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("invalid email format");
      return;
    }

    for (let i = 0; i < emails.length; i++) {
      if (
        emails[i].includes(email) &&
        passs[i].includes(password) &&
        auths[i].includes("yes")
      ) {
        setError("Success");
        setLoggedIn(true);
        return;
      }
    }

    setError("Invalid credentials or authorization");
  };

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
        <>
          <h1>Login</h1>
          <form onSubmit={handleInput} style={{ width: "min-content" }}>
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
            {loggedIn ? (
              <div style={{ padding: "6px" }}>
                <Link to="dashboard">
                  <button style={{ padding: "5px" }} className="btn btn-info">
                    Go to Dashboard
                  </button>
                </Link>
              </div>
            ) : (
              <>
                <div style={{ display: "flex", gap: "23px", padding: "10px" }}>
                  <button className="btn btn-success" onClick={handleInput}>
                    Login
                  </button>
                  <Link to="register">
                    <button className="btn btn-primary">Register</button>
                  </Link>
                </div>
              </>
            )}
          </form>

          {error}
        </>
      </div>
    </div>
  );
}

export default Login;
