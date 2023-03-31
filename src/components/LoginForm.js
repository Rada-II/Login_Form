import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const manageLogin = () => {
    alert(`Username: ${username}; Password: ${password}`);
  };

  const manageReset = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <form className="form">
      <input
        className="username"
        type="text"
        value={username}
        placeholder=" Username"
        onChange={(event) => setUsername(event.target.value)}
      />

      <input
        className="password"
        type="password"
        value={password}
        placeholder=" Password"
        onChange={(event) => setPassword(event.target.value)}
      />

      <button className="login-btn" type="button" onClick={manageLogin}>
        Login
      </button>

      <button className="reset-btn" type="button" onClick={manageReset}>
        Reset
      </button>
    </form>
  );
}

export default LoginForm;
