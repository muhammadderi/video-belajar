import { useState, useRef, useEffect } from "react";
const NavbarHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <nav className="flex justify-between items-center px-6 py-3 border-b border-[#3A35411F] md:px-[120px] w-full">
        {/* Logo */}
        <div>
          <img
            src="/src/assets/auth/Logo.png"
            alt="video-belajar"
            className="w-[180px] h-[42px] sm:w-[237px] sm:h-[56px]"
          />
        </div>

        <div className="hidden sm:flex gap-5 items-center">
          <p className="font-dm-sans font-medium text-base leading-[22.4px] text-[#333333AD] hidden md:block">
            Kategori
          </p>
          <div className="relative inline-block" ref={menuRef}>
            <div
              className="p-2 cursor-pointer"
              onMouseEnter={() => setIsOpen(true)}
            >
              <img
                src="/src/assets/home/user.png"
                alt="user"
                className="w-[44px] h-[44px] hidden md:block"
              />
            </div>

            {isOpen && (
              <ul
                className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50"
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
                  Keluar
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="sm:hidden relative inline-block" ref={menuRef}>
          <div
            className="p-2 cursor-pointer"
            onMouseEnter={() => setIsOpen(true)}
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
              className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50 mr-50"
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
                Keluar
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavbarHome;
