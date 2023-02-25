import "./App.css";
import AdminPanel from "./adminPage/AdminPanel";
import Authentication from "./Authentication/Authentication";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");

  let userPassword = "test";

  return (
    <div className="App">
      <Authentication onSetPassword={setPassword} />

      {password === userPassword ? <AdminPanel /> : "not the right password"}
    </div>
  );
}

export default App;
