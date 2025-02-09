import Navbar from "../atoms/NavbarAuth";

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center py-16 px-32">
        <div className="w-[590px] h-auto border-2 rounded  border-[#F1F1F1] p-9">
          <div className="py-4">
            <h1 className=" text-center font-poppins font-semibold text-[32px] leading-[35.2px]">
              {title}
            </h1>
            <p className="font-dmsans font-normal text-bise tracking-tighter text-[#333333AD] text-center">
              {subtitle}
            </p>
          </div>
          <form className="w-[518px] h-auto flex flex-col gap-6">
            {children}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
