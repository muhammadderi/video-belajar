import { useEffect, useState } from "react";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import useUserLogin from "../../zustand/User";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useUserLogin();
  const navigate = useNavigate();
  const isUserLogin =
    (user && typeof user === "object" && Object.keys(user).length > 0) || "";

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

        <div className="hidden md:flex gap-5 text-md items-center">
          <Button
            text={"Kategori"}
            className="hover:font-bold text-[#333333]"
            onClick={() => navigate("/allprofile")}
          />
          {isUserLogin ? (
            <div className="w-11 h-11 rounded-lg">
              <img src={user.image} alt="profile-user" />
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
          <p className="text-[#333333] text-center">Kategori</p>
          <Button
            text={"Login"}
            className="w-full bg-[#3ECF4C] text-white rounded-xl py-2 px-10 font-bold hover:bg-white hover:border border-[#3ECF4C] hover:text-[#3ECF4C]"
          />
          <Button
            text={"Register"}
            className="w-full text-[#3ECF4C] rounded-xl py-2 px-10 border border-[#3ECF4C] font-bold hover:bg-[#3ECF4C] hover:text-white"
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
