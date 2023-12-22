import "./App.css";
import Navbar from "./Components/Navbar";
import {Route, Routes} from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Signup from "./pages/Signup"
// import PrivateRoute from "./Components/PrivateRoute";

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  return (
    <div>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}></Login>}></Route>
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}></Signup>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        </Routes>
    </div>
  );
}

export default App;
