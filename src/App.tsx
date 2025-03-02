import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import AddApplications from "./pages/AddApplications";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/add-application' element={<AddApplications />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
