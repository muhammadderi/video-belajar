const NavbarHome = () => {
  return (
    <div>
      <nav className="flex justify-between justify-center justify-items-center items-center px-[120px] py-[12px] border-b border-[#3A35411F]">
        <div>
          <img
            src="\src\assets\auth\Logo.png"
            alt="video-belajar"
            className="w-[237px] h-[56px]"
          />
        </div>
        <div className="flex gap-5 rounded-[10px] justify-center justify-items-center items-center">
          <p className="font-dm-sans font-medium text-base leading-[22.4px] text-[#333333AD]">
            Kategori
          </p>
          <img
            src="\src\assets\home\user.png"
            alt="user"
            className="w-[44px] h-[44px]"
          />
        </div>
      </nav>
    </div>
  );
};

export default NavbarHome;
