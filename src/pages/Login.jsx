import React, { useState } from "react";
import AuthLayout from "../components/templates/AuthLayout";
import Label from "../components/molecules/InputField";
import Button from "../components/atoms/Button";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const navigate = useNavigate();

  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      users.some((user) => user.email === formLogin.email) &&
      users.some((user) => user.password === formLogin.password)
    ) {
      localStorage.setItem("loginUsers", JSON.stringify(users));

      setFormLogin({
        email: "",
        password: "",
      });

      navigate("/home");
    } else alert("Email atau password tidak sesuai");
  };

  return (
    <div>
      <AuthLayout
        title="Masuk Ke Akun"
        subtitle="Yuk, lanjutin belajarmu di videobelajar"
        onSubmit={handleSubmit}
      >
        <Label
          id="email"
          name="email"
          type="email"
          label="Email"
          value={formLogin.email}
          onChange={handleChange}
        />
        <Label
          label="Password"
          id="password"
          type="password"
          // eye="\src\assets\auth\mdi_eye-off.png"
          name="password"
          value={formLogin.password}
          onChange={handleChange}
        />
        <p className="flex justify-end">
          <a
            href="#"
            className="font-dm-sans font-medium md:text-base text-[14px] leading-[22.4px] text-[#4A505C]"
          >
            Lupa Password
          </a>
        </p>
        <Button
          textButton="Masuk"
          color="text-white text-[14px] md:text-[16px]"
          bgcolor="bg-[#3ECF4C]"
          size="md:w-[518px] md:h-[42px] w-[280px] h-[34px]"
          type="submit"
        />
        <Link to="/register">
          <Button
            textButton="Daftar"
            color="text-[#3ECF4C] text-[14px] md:text-[16px]"
            bgcolor="bg-[#E2FCD9CC]"
            size="md:w-[518px] md:h-[42px] w-[280px] h-[34px]"
            type="button"
          />
        </Link>
        <div className="flex items-center gap-4">
          <div className="h-px w-full bg-[#4A505C]"></div>
          <span className="text-[#4A505C] md:text-base text-[14px]">atau</span>
          <div className="h-px w-full bg-[#4A505C]"></div>
        </div>
        <Button
          img=".\src\assets\auth\google-icon.png"
          imgStyle="w-[20px] h-[20px]"
          textButton="Masuk dengan Google"
          color="text-[#4A505C]"
          font="font-dm-sans md:text-base text-[14px] font-bold leading-[22.4px]"
          size="md:w-[518px] md:h-[42px] w-[280px] h-[34px] border"
        />
      </AuthLayout>
    </div>
  );
}

export default Login;
