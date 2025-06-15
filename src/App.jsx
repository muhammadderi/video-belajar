import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "./components/pages/HomePages";
import AllProfile from "./components/pages/AllProfile";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import ForgotPassword from "./components/pages/ForgotPassword";
import MyProfile from "./components/pages/MyProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/allProfile" element={<AllProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/myProfile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
