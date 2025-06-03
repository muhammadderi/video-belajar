import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "./components/pages/HomePages";
import AllProfile from "./components/pages/AllProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/allprofile" element={<AllProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
