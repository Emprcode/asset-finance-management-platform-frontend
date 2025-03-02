import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import AddApplications from "./pages/AddApplications";
import Register from "./pages/Register";
import { ToastContainer } from "react-bootstrap";
import Login from "./pages/Login";
import { ApplicationFormData } from "./pages/types";
import { useEffect, useState } from "react";
import { getApplications } from "./components/helper/axiosHelper";

function App() {
  const [applications, setApplications] = useState<ApplicationFormData[]>([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    const { status, result } = await getApplications();

    status === "success" && setApplications(result);
  };
  console.log(applications);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/add-application' element={<AddApplications />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
