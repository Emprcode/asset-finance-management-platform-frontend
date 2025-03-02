import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import AddApplications from "./pages/AddApplications";
import Register from "./pages/Register";
import { ToastContainer } from "react-bootstrap";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/add-application' element={<AddApplications />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
