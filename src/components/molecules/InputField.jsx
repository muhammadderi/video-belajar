import { useState } from "react";

const Label = ({ label, id, type, placeholder, value, onChange, name }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="font-dm-sans font-normal md:text-base text-[14px] text-[#333333AD] "
      >
        {label}{" "}
        <sup className="text-red-500 font-poppins font-normal text-base leading-6">
          *
        </sup>{" "}
      </label>
      <div className="relative w-full">
        <input
          className="md:w-[518px] h-[48px] w-[280px]  border rounded-md border-[#F1F1F1] p-3"
          id={id}
          name={name}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          // type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
        />

        {type === "password" && (
          <button
            type="button"
            className="absolute inset-y-1 right-4 flex items-center"
            onClick={togglePassword}
          >
            <img
              src={
                showPassword ? "/eye/icons8-eye-24.png" : "/eye/mdi_eye-off.png"
              } // Ubah icon sesuai state
              alt="Toggle password visibility"
              className="w-6 h-6"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Label;
