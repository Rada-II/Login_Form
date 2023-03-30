import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert(`Username: ${username}, Password: ${password}`);
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <form className="form">
      <label>
        <input
          className="username"
          type="text"
          value={username}
          placeholder=" Username"
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      {/* <br /> */}
      <label>
        <input
          className="password"
          type="password"
          value={password}
          placeholder=" Password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      {/* <br /> */}
      <button className="login-btn" type="button" onClick={handleLogin}>
        Login
      </button>
      {/* <br /> */}
      <button className="reset-btn" type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

export default LoginForm;
