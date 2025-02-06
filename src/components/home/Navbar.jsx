const Navbar = () => {
  return (
    <nav className="flex justify-between justify-center justify-items-center items-center ">
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
  );
};

export default Navbar;
