import { useNavigate } from "react-router-dom";

function NavbarAuth() {
  const navigate = useNavigate();
  return (
    <nav className="md:w-screen w-[360px] h-20 border-1 flex justify-between md:py-3 md:px-32 py-[16px] px-[24px]">
      <button onClick={() => navigate("/")}>
        <img
          src="/Logo/Logo.png"
          className="md:w-[237px] md:h-14 w-[142px] h-[42px]"
          alt="logo"
        />
      </button>
    </nav>
  );
}

export default NavbarAuth;
