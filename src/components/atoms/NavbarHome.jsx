import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavbarHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const desktopMenuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        desktopMenuRef.current &&
        !desktopMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div>
      <nav className="flex justify-between items-center px-6 py-3 border-b border-[#3A35411F] md:px-[120px] w-full">
        <div>
          <img
            src="/src/assets/auth/Logo.png"
            alt="video-belajar"
            className="w-[180px] h-[42px] sm:w-[237px] sm:h-[56px]"
          />
        </div>

        
        <div className="hidden sm:flex gap-5 items-center" ref={desktopMenuRef}>
          <p className="font-dm-sans font-medium text-base leading-[22.4px] text-[#333333AD] hidden md:block">
            Kategori
          </p>
          <div className="relative inline-block">
            <div
              className="p-2 cursor-pointer"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <img
                src="/src/assets/home/user.png"
                alt="user"
                className="w-[44px] h-[44px] hidden md:block"
              />
            </div>

            {isOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profil Saya
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Kelas Saya
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Pesanan Saya
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <button onClick={() => handleLogout()}>Keluar</button>
                </li>
              </ul>
            )}
          </div>
        </div>

       
        <div className="sm:hidden relative inline-block" ref={mobileMenuRef}>
          <div
            className="p-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <button>
              <img
                src="/Logo/humberger.png"
                alt="humberger-logo"
                className="w-[24px] h-[24px]"
              />
            </button>
          </div>

          {isOpen && (
            <ul
              className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Profil Saya
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Kelas Saya
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Pesanan Saya
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <button onClick={() => handleLogout()}>Keluar</button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavbarHome;
