const NavbarHome = () => {
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
          <img
            src="/src/assets/home/user.png"
            alt="user"
            className="w-[44px] h-[44px] hidden md:block"
          />
        </div>

        <div className="sm:hidden">
          <button>
            <img
              src="/Logo/humberger.png"
              alt="humberger-logo"
              className="w-[24px] h-[24px]"
            />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavbarHome;
