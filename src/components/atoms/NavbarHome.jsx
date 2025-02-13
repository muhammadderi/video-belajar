import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavbarHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-between items-center px-6 py-3 border-b border-[#3A35411F] md:px-[120px]">
        {/* Logo */}
        <div>
          <img
            src="/src/assets/auth/Logo.png"
            alt="video-belajar"
            className="w-[180px] h-[42px] sm:w-[237px] sm:h-[56px]"
          />
        </div>

        {/* Menu di layar besar (hilang di layar kecil) */}
        <div className="hidden sm:flex gap-5 items-center">
          <p className="font-dm-sans font-medium text-base leading-[22.4px] text-[#333333AD]">
            Kategori
          </p>
          <img
            src="/src/assets/home/user.png"
            alt="user"
            className="w-[44px] h-[44px]"
          />
        </div>

        {/* Tombol Hamburger (hanya muncul di layar kecil) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-gray-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Dropdown di layar kecil */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-200 p-4 sm:hidden">
            <p className="font-dm-sans font-medium text-base leading-[22.4px] text-[#333333AD]">
              Kategori
            </p>
            <img
              src="/src/assets/home/user.png"
              alt="user"
              className="w-[44px] h-[44px] mt-2"
            />
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavbarHome;
