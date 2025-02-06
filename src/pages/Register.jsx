import React from "react";
import AuthLayout from "../layouts/AuthLayout";
import Label from "../components/auth/Label";
import Button from "../components/auth/Button";

function Register() {
  return (
    <div>
      <AuthLayout
        title="Pendaftaran Akun"
        subtitle="Yuk, daftarkan akunmu sekarang juga!"
      >
        <Label label="Nama Lengkap" id="name" type="name" />
        <Label label="E-Mail" id="email" type="email" />

        <div className="relative w-6 flex items-center gap-2 w-full justify-items-center">
          <div className="relative w-[156.67px] h-[48px]">
            <div className="flex items-center border border-[#3A35411F] rounded-lg bg-white p-2 h-[42px] ">
              <img
                id="flag-img"
                src="https://flagcdn.com/w40/id.png"
                alt="flag"
                className="w-6 h-4 mr-2"
              />
              <select
                id="country-dropdown"
                className="w-full bg-transparent focus:outline-none"
              >
                <option value="us" data-flag="https://flagcdn.com/w40/us.png">
                  +1
                </option>
                <option value="gb" data-flag="https://flagcdn.com/w40/gb.png">
                  +44
                </option>
                <option value="fr" data-flag="https://flagcdn.com/w40/fr.png">
                  +33
                </option>
                <option value="de" data-flag="https://flagcdn.com/w40/de.png">
                  +49
                </option>
                <option value="id" data-flag="https://flagcdn.com/w40/id.png">
                  +62
                </option>
              </select>
            </div>
          </div>
          <input
            type="text"
            className="w-full border border-[#3A35411F] p-2 rounded-lg w-64 h-[42px] focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <Label
          label="Kata Sandi"
          id="password"
          type="password"
          eye="src\assets\auth\mdi_eye-off.png"
        />
        <Label
          label="Konfirmasi Kata Sandi"
          id="confirmPassword"
          type="confirmPassword"
          eye="src\assets\auth\mdi_eye-off.png"
        />
        <p className="flex justify-end">
          <a
            href="#"
            className="font-dm-sans font-medium text-base leading-[22.4px] text-[#4A505C]"
          >
            Lupa Password
          </a>
        </p>
        <Button textButton="Masuk" color="text-white" bgcolor="bg-[#3ECF4C]" />
        <Button
          textButton="Daftar"
          color="text-[#3ECF4C]"
          bgcolor="bg-[#E2FCD9CC]"
        />
        <div className="flex items-center gap-4">
          <div className="h-px w-full bg-[#4A505C]"></div>
          <span className="text-[#4A505C] text-base">atau</span>
          <div className="h-px w-full bg-[#4A505C]"></div>
        </div>
        <Button
          img="\src\assets\auth\google-icon.png"
          textButton="Masuk dengan Google"
          color="text-[#4A505C]"
          font="font-dm-sans text-base font-bold leading-[22.4px]"
        />
      </AuthLayout>
    </div>
  );
}

export default Register;
