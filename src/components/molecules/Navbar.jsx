import { useState } from "react";
import Button from "../atoms/Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border px-4 py-5 md:px-10">
      <div className="flex justify-between items-center">
        <img src="./logo.png" alt="logo" className="bg-green" />

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

        <div className="hidden md:flex gap-5 text-xl items-center">
          <p className="text-[#333333]">Kategori</p>
          <Button
            text={"Login"}
            className="bg-[#3ECF4C] text-white rounded-xl py-2 px-10 font-bold hover:bg-white hover:border border-[#3ECF4C] hover:text-[#3ECF4C]"
          />
          <Button
            text={"Register"}
            className="text-[#3ECF4C] rounded-xl py-2 px-10 border border-[#3ECF4C] font-bold hover:bg-[#3ECF4C] hover:text-white"
          />
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
