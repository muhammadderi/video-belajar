import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "./components/pages/HomePages";
import AllProfile from "./components/pages/AllProfile";
import Register from "./components/pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/allprofile" element={<AllProfile />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
