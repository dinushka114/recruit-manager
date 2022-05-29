import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginView from "./views/Login/Login";
import SignupView from "./views/Signup/Signup";
import RecruitView from "./views/Recruit/Recruit";
import ManagerView from "./views/Manager/Manager";
import io from "socket.io-client";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginView />} />
        <Route path="/recruit" element={<RecruitView />} />
        <Route path="/manager" element={<ManagerView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/signup" element={<SignupView />} />
      </Routes>
    </Router>
  );
};

export const socket = io("http://localhost:2342/");
export default App;
