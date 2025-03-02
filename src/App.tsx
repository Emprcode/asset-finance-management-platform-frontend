import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import AddApplications from "./pages/AddApplications";
import Register from "./pages/Register";
import { ToastContainer } from "react-bootstrap";
import Login from "./pages/Login";
import { User } from "./pages/types";
import { useEffect, useState } from "react";

function App() {
  const [user, setuser] = useState<User | null>(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    const user = sessionStorage.getItem("user");
    if (user) {
      const userObj = JSON.parse(user);
      setuser(userObj);
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard user={user} />} />
          <Route path='/add-application' element={<AddApplications />} />
          {/* <Route path='/:_id' element={<EditApplication />} /> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
