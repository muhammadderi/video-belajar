import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/redux/usersSlice";
import Button from "./Button";

const NavbarHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const desktopMenuRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loggedInUser } = useSelector((state) => state.users);

  const [profile, setProfile] = useState("");

  useEffect(() => {
    if (!loggedInUser) {
      setProfile("");
    } else {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const savedProfile = users.find(
        (user) =>
          user.email.toLowerCase().trim() ===
          loggedInUser.email.toLowerCase().trim()
      );

      if (savedProfile) {
        setProfile(savedProfile);
      }
    }
  }, [loggedInUser]);

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
    dispatch(logout());
    localStorage.removeItem("loginUsers");
    setProfile("");
    navigate("/");
  };

  return (
    <>
      {loggedInUser ? (
        <div>
          <nav className="z-50 bg-white flex justify-between items-center px-6 py-3 border-b border-[#3A35411F] md:px-[120px] w-full">
            <div>
              <button onClick={() => navigate("/")}>
                <img
                  src="/Logo/Logo.png"
                  alt="video-belajar"
                  className="w-[180px] h-[42px] sm:w-[237px] sm:h-[56px]"
                />
              </button>
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
                    src={
                      profile.image ? profile.image : "/Logo/default-user.png"
                    }
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
                      <Link to="/profile">Profil Saya</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Kelas Saya
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Pesanan Saya
                    </li>
                    <li
                      onClick={handleLogout}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <button>Keluar</button>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </nav>
        </div>
      ) : (
        <div>
          <nav className="flex justify-between items-center px-6 py-3 border-b border-[#3A35411F] md:px-[120px] w-full">
            <div>
              <button onClick={() => navigate("/")}>
                <img
                  src="/Logo/Logo.png"
                  alt="video-belajar"
                  className="w-[180px] h-[42px] sm:w-[237px] sm:h-[56px]"
                />
              </button>
            </div>

            <div className="hidden sm:flex gap-5 items-center">
              <button className="text-[#333333AD] text-[16px] font-medium">
                Kategori
              </button>
              <Button
                bgcolor={"bg-[#3ECF4C]"}
                textButton={"Login"}
                type={"button"}
                color={
                  "text-[white] py-[10px] px-[26px] text-[16px] font-bold leading-[22.4px] hover:bg-white hover:text-[#3ECF4C] hover:border-[#3ECF4C] hover:border"
                }
                onClick={() => navigate("/login")}
              />
              <Button
                textButton={"Register"}
                type={"button"}
                color={
                  "text-[#3ECF4C] border border-[#3ECF4C] py-[10px] px-[26px] text-[16px] font-bold leading-[22.4px] hover:bg-[#3ECF4C] hover:text-white"
                }
                onClick={() => navigate("/register")}
              />
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavbarHome;
