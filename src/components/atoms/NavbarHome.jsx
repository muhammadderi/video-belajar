import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

const NavbarHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const desktopMenuRef = useRef(null);
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("userActive") === "true";

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
    <>
      {isLogin ? (
        <div>
          <nav className="fixed z-50 bg-white flex justify-between items-center px-6 py-3 border-b border-[#3A35411F] md:px-[120px] w-full">
            <div>
              <img
                src="/Logo/Logo.png"
                alt="video-belajar"
                className="w-[180px] h-[42px] sm:w-[237px] sm:h-[56px]"
              />
            </div>

            <div
              className="hidden sm:flex gap-5 items-center"
              ref={desktopMenuRef}
            >
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

            <div
              className="sm:hidden relative inline-block"
              ref={mobileMenuRef}
            >
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
                // fixed inset-x-0 top-14 bg-white text-[#333333AD] border rounded-lg shadow-lg z-50 w-full
                <ul
                  className="fixed inset-x-0 top-14 bg-white text-[#333333AD] border rounded-lg shadow-lg z-50 w-full"
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-[#FF5C2B]">
                    Profil Saya
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-[#FF5C2B]">
                    Kelas Saya
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-[#FF5C2B]">
                    Pesanan Saya
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-[#FF5C2B]">
                    <button
                      onClick={() => handleLogout()}
                      className="flex gap-1"
                    >
                      Keluar{" "}
                      <img
                        src="/Logo/logout.png"
                        alt="Logout"
                        className="w-[24px] h-[24px]"
                      />
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </nav>
        </div>
      ) : (
        <div>
          <nav className="flex justify-between items-center px-6 py-3 border-b border-[#3A35411F] md:px-[120px] w-full">
            <div>
              <img
                src="/Logo/Logo.png"
                alt="video-belajar"
                className="w-[180px] h-[42px] sm:w-[237px] sm:h-[56px]"
              />
            </div>

            <div className="hidden sm:flex gap-5 items-center">
              <button className="text-[#333333AD] text-[16px] font-medium">
                Kategori
              </button>
              <Button
                bgcolor={"bg-[#3ECF4C]"}
                textButton={"Login"}
                type={"login"}
                color={
                  "text-[white] py-[10px] px-[26px] text-[16px] font-bold leading-[22.4px] hover:bg-white hover:text-[#3ECF4C] hover:border-[#3ECF4C] hover:border"
                }
                onClick={() => navigate("/login")}
              />
              <Button
                textButton={"Register"}
                type={"login"}
                color={
                  "text-[#3ECF4C] border border-[#3ECF4C] py-[10px] px-[26px] text-[16px] font-bold leading-[22.4px] hover:bg-[#3ECF4C] hover:text-white"
                }
                onClick={() => navigate("/register")}
              />
            </div>

            <div
              className="sm:hidden relative inline-block"
              ref={mobileMenuRef}
            >
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
                  className="fixed inset-x-0 top-14 bg-white text-[#333333AD] border rounded-lg shadow-lg z-50 w-full"
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-[#3ECF4C]">
                    <Link>Beranda</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer  hover:text-[#3ECF4C]">
                    <Link>Kategori</Link>
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => navigate("/login")}
                  >
                    <Button
                      bgcolor={"bg-[#3ECF4C]"}
                      textButton={"Login"}
                      type={"login"}
                      color={
                        "text-[white] w-full py-[10px] text-[16px] font-bold leading-[22.4px] hover:bg-white hover:text-[#3ECF4C] hover:border-[#3ECF4C] hover:border"
                      }
                    />
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => navigate("/register")}
                  >
                    <Button
                      textButton={"Register"}
                      type={"login"}
                      color={
                        "text-[#3ECF4C] border border-[#3ECF4C] py-[10px] w-full text-[16px] font-bold leading-[22.4px] hover:bg-[#3ECF4C] hover:text-white"
                      }
                    />
                  </li>
                </ul>
              )}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavbarHome;
