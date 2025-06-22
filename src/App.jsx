import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "./components/pages/HomePages";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import ForgotPassword from "./components/pages/ForgotPassword";
import MyProfile from "./components/pages/MyProfile";
import AllProduct from "./components/pages/AllProduct";
import NotFound from "./components/atoms/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/allProduct" element={<AllProduct />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
