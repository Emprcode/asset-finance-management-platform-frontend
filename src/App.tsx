import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import AddApplication from "./pages/AddApplication";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/add-application' element={<AddApplication />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
