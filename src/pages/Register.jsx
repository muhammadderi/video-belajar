import React, { useState } from "react";
import AuthLayout from "../components/templates/AuthLayout";
import Label from "../components/molecules/InputField";
import Button from "../components/atoms/Button";

function Register() {
  const [country, setCountry] = useState("+62");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const flags = {
    "+62": "https://flagcdn.com/w40/id.png",
    "+1": "https://flagcdn.com/w40/us.png",
    "+44": "https://flagcdn.com/w40/gb.png",
  };

  const handleSubmit = () => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password dan konfirmasi password tidak cocok!");
      return;
    }
  };

  return (
    <div>
      <AuthLayout
        title="Pendaftaran Akun"
        subtitle="Yuk, daftarkan akunmu sekarang juga!"
      >
        <Label
          label="Nama Lengkap"
          id="fullName"
          type="name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Label
          label="E-Mail"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="relative w-6 flex items-center gap-2 w-full justify-items-center">
          <div className="relative w-[156.67px] h-[48px]">
            <div className="flex items-center border border-[#3A35411F] rounded-lg bg-white p-2 h-[42px] ">
              <img
                id="flag-img"
                src={flags[country]}
                alt={country}
                className="w-6 h-4 mr-2"
              />
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                id="country-dropdown"
                className="w-full bg-transparent focus:outline-none text-[ md:text-base text-[14px]"
              >
                <option value="+62">+62</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
            </div>
          </div>
          <input
            id="country-dropdown"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-[#3A35411F] p-2 rounded-lg w-64 h-[42px] focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <Label
          label="Kata Sandi"
          id="password"
          type="password"
          eye="src\assets\auth\mdi_eye-off.png"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Label
          label="Konfirmasi Kata Sandi"
          id="confirmPassword"
          type="confirmPassword"
          eye="src\assets\auth\mdi_eye-off.png"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
          textButton="Daftar"
          color="text-white text-[14px] md:text-[16px]"
          bgcolor="bg-[#3ECF4C]"
          size="md:w-[518px] md:h-[42px] w-[280px] h-[34px]"
          type="submit"
        />
        <Button
          textButton="Masuk"
          color="text-[#3ECF4C] text-[14px] md:text-[16px]"
          bgcolor="bg-[#E2FCD9CC]"
          size="md:w-[518px] md:h-[42px] w-[280px] h-[34px]"
        />
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
