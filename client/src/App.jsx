import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EmployerDashboard from "./pages/EmployerDashboard";
import Applicants from "./pages/Applicants";
import ApplyJob from "./pages/ApplyJob";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/employer" element={<EmployerDashboard />} />
        <Route path="/applicants" element={<Applicants />} />
        <Route path="/apply/:id" element={<ApplyJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;