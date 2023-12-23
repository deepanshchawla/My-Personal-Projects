import "./App.css";
import Navbar from "./Components/Navbar";
import {Route, Routes} from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Signup from "./pages/Signup"
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>

        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}></Route>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}></Login>}></Route>
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}></Signup>}></Route>
          <Route path="/dashboard" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
            </PrivateRoute>
          }></Route>

        </Routes>
    </div>
  );
}

export default App;
