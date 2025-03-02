import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import AddApplications from "./pages/AddApplications";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/add-application' element={<AddApplications />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
