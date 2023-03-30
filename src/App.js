import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="login-container">
      <h1 className="title">Login</h1>
      <div className="login-box">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
