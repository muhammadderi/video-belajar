import Navbar from "../atoms/NavbarAuth";

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center md:py-16 md:px-32 py-[28px] px-[20px]">
        <div className="md:w-[590px] w-[320px] h-auto border-2 rounded  border-[#F1F1F1] md:p-9 p-[20px]">
          <div className="py-4">
            <h1 className=" text-center font-poppins font-semibold md:text-[32px] text-[24px] leading-[35.2px]">
              {title}
            </h1>
            <p className="font-dmsans font-normal md:text-base text-[14px] tracking-tighter text-[#333333AD] text-center">
              {subtitle}
            </p>
          </div>
          <form className="md:w-[518px] w-[280px] h-auto flex flex-col gap-6">
            {children}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
