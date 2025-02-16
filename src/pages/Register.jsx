import React, { useState } from "react";
import AuthLayout from "../components/templates/AuthLayout";
import Label from "../components/molecules/InputField";
import Button from "../components/atoms/Button";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    country: "Indonesia",
  });

  const validateNumber = {
    Indonesia: /^[0-9]{12,13}$/,
    Amerika: /^[0-9]{10}$/,
    Inggris: /^[0-9]{10,11}$/,
  };

  const flags = {
    Indonesia: "https://flagcdn.com/w40/id.png",
    Amerika: "https://flagcdn.com/w40/us.png",
    Inggris: "https://flagcdn.com/w40/gb.png",
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getPasswordStrength = (password) => {
    if (password.length < 8) return "Password Weak ❌";
    if (!/[A-Z]/.test(password)) return "Add an uppercase letter 🔠";
    if (!/[a-z]/.test(password)) return "Add a lowercase letter 🔡";
    if (!/\d/.test(password)) return "Add a number 🔢";
    if (!/[@$!%*?&]/.test(password)) return "Add a special character ❗";
    return "Password Strong ✅";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateNumber[formData.country]?.test(formData.phone)) {
      alert("Phone Number not valid!!");
    } else if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password does not match!");
    } else if (
      getPasswordStrength(formData.password) !== "Password Strong ✅"
    ) {
      alert("Please change to complexity password");
    } else {
      alert("Pendaftaran berhasil ");

      navigate("/");
    }
  };

  return (
    <div>
      <AuthLayout
        title="Pendaftaran Akun"
        subtitle="Yuk, daftarkan akunmu sekarang juga!"
        onSubmit={handleSubmit}
      >
        <Label
          label="Nama Lengkap"
          id="fullName"
          name="fullName"
          type="name"
          value={formData.fullName}
          onChange={handleChange}
        />
        <Label
          label="E-Mail"
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        <div className="relative w-6 flex items-center gap-2 w-full justify-items-center">
          <div className="relative w-[156.67px] h-[48px]">
            <div className="flex items-center border border-[#3A35411F] rounded-lg bg-white p-2 h-[42px] ">
              <img
                id="flag-img"
                src={flags[formData.country]}
                alt={formData.country}
                className="w-6 h-4 mr-2"
              />
              <select
                value={formData.country}
                onChange={handleChange}
                id="country"
                name="country"
                className="w-full bg-transparent focus:outline-none text-[ md:text-base text-[14px]"
              >
                <option value="Indonesia">+62</option>
                <option value="Amerika">+1</option>
                <option value="Inggris">+44</option>
              </select>
            </div>
          </div>
          <input
            id="country-dropdown"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-[#3A35411F] p-2 rounded-lg w-64 h-[42px] focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <Label
          label="Kata Sandi"
          id="password"
          name="password"
          type="password"
          eye="src\assets\auth\mdi_eye-off.png"
          value={formData.password}
          onChange={handleChange}
        />
        {formData.password.length > 0 ? (
          <p className="text-sm text-gray-600">
            {getPasswordStrength(formData.password)}
          </p>
        ) : (
          ""
        )}
        <Label
          label="Konfirmasi Kata Sandi"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          eye="src\assets\auth\mdi_eye-off.png"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {formData.confirmPassword.length > 0 ? (
          <p className="text-sm text-gray-600">
            {getPasswordStrength(formData.confirmPassword)}
          </p>
        ) : (
          ""
        )}
        <p className="flex justify-end">
          <a
            href="#"
            className="font-dm-sans font-medium md:text-base text-[14px] leading-[22.4px] text-[#4A505C]"
          >
            Lupa Password
          </a>
        </p>
        <Button
          textButton="Daftar"
          color="text-white text-[14px] md:text-[16px]"
          bgcolor="bg-[#3ECF4C]"
          size="md:w-[518px] md:h-[42px] w-[280px] h-[34px]"
          type="submit"
        />
        <Link to="/">
          <Button
            textButton="Masuk"
            color="text-[#3ECF4C] text-[14px] md:text-[16px]"
            bgcolor="bg-[#E2FCD9CC]"
            size="md:w-[518px] md:h-[42px] w-[280px] h-[34px]"
            type="button"
          />
        </Link>
        <div className="flex items-center gap-4">
          <div className="h-px w-full bg-[#4A505C]"></div>
          <span className="text-[#4A505C] text-base">atau</span>
          <div className="h-px w-full bg-[#4A505C]"></div>
        </div>
        <Button
          img="\src\assets\auth\google-icon.png"
          imgStyle="w-[20px] h-[20px]"
          textButton="Masuk dengan Google"
          color="text-[#4A505C]"
          font="font-dm-sans  md:text-base text-[14px] border font-bold leading-[22.4px]"
          size="md:w-[518px] md:h-[42px] w-[280px] h-[34px]"
        />
      </AuthLayout>
    </div>
  );
}

export default Register;
