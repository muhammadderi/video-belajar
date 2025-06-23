import { useEffect, useState } from "react";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import useUserLogin from "../../zustand/User";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const { user, logout } = useUserLogin();
  const navigate = useNavigate();
  const isUserLogin =
    (user && typeof user === "object" && Object.keys(user).length > 0) || "";

  const handleMenu = () => {
    setShow(!show);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className="border px-4 py-5 md:px-28">
      <div className="flex justify-between items-center">
        <img
          src="./logo.png"
          alt="logo"
          className="bg-green"
          onClick={() => navigate("/")}
        />

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6 text-[#3ECF4C]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="hidden md:flex gap-5 text-md items-center ">
          <Button
            text={"Kategori"}
            className="hover:font-bold text-[#333333]"
            onClick={() => navigate("/allProduct")}
          />
          {isUserLogin ? (
            <div className="w-11 h-11 rounded-lg flex justify-center items-center relative text-left">
              <img src="/bg-hero.jpg" alt="profile-user" onClick={handleMenu} />
            </div>
          ) : (
            <div className="flex gap-4">
              <Button
                text={"Login"}
                onClick={() => navigate("/login")}
                className="bg-[#3ECF4C] text-white rounded-xl py-2 px-10 font-bold hover:bg-white hover:border border-[#3ECF4C] hover:text-[#3ECF4C]"
              />
              <Button
                text={"Register"}
                onClick={() => navigate("/register")}
                className="text-[#3ECF4C] rounded-xl py-2 px-10 border border-[#3ECF4C] font-bold hover:bg-[#3ECF4C] hover:text-white"
              />
            </div>
          )}
        </div>
      </div>

      {open && (
        <div className="flex flex-col mt-4 gap-4 text-lg md:hidden w-full">
          {isUserLogin ? (
            <div className="flex flex-col gap-4 text-lg md:hidden w-full">
              <h1 className="font-bold text-center capitalize text-xl text-[#3ECF4C]">
                {user.fullName}
              </h1>
              <Button
                text={"Kategori"}
                className="w-full bg-[#3ECF4C] text-white rounded-xl py-2 px-10 font-bold hover:bg-white hover:border border-[#3ECF4C] hover:text-[#3ECF4C]"
                onClick={() => navigate("/allProduct")}
              />
              <Button
                text={"Profil Saya"}
                onClick={() => navigate("/myProfile")}
                className="w-full bg-[#3ECF4C] text-white rounded-xl py-2 px-10 font-bold hover:bg-white hover:border border-[#3ECF4C] hover:text-[#3ECF4C]"
              />
              <Button
                text={"Keluar"}
                onClick={handleLogout}
                className="w-full bg-[#3ECF4C] text-white rounded-xl py-2 px-10 font-bold hover:bg-white hover:border border-[#3ECF4C] hover:text-[#3ECF4C]"
              />
            </div>
          ) : (
            <div className="flex flex-col mt-4 gap-4 text-lg md:hidden w-full">
              <Button
                text={"Kategori"}
                className="w-full hover:font-bold text-[#333333] "
                onClick={() => navigate("/allProduct")}
              />
              <Button
                text={"Login"}
                onClick={() => navigate("/login")}
                className="w-full bg-[#3ECF4C] text-white rounded-xl py-2 px-10 font-bold hover:bg-white hover:border border-[#3ECF4C] hover:text-[#3ECF4C]"
              />
              <Button
                text={"Register"}
                onClick={() => navigate("/register")}
                className="w-full text-[#3ECF4C] rounded-xl py-2 px-10 border border-[#3ECF4C] font-bold hover:bg-[#3ECF4C] hover:text-white"
              />
            </div>
          )}
        </div>
      )}

      {show && (
        <div className="absolute right-0 mt-2 w-56 bg-white border rounded shadow-md z-10">
          <Button
            className={"block w-full px-4 py-2 text-left hover:bg-gray-100"}
            text={"Profil Saya"}
            onClick={() => navigate("/myProfile")}
          />
          <hr />
          <div className="flex items-center" onClick={handleLogout}>
            <Button
              className={"block w-full px-4 py-2 text-left hover:bg-gray-100"}
              text={"Keluar"}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-log-out-icon lucide-log-out"
            >
              <path d="m16 17 5-5-5-5" />
              <path d="M21 12H9" />
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
