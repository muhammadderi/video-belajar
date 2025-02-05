import React from "react";
import AuthLayout from "../layouts/AuthLayout";
import Label from "../components/auth/Label";

function Register() {
  return (
    <div>
      <AuthLayout
        title="Pendaftaran Akun"
        subtitle="Yuk, daftarkan akunmu sekarang juga!"
      >
        <Label label="Nama Lengkap" id="name" type="name" />
        <Label label="E-Mail" id="email" type="email" />
        <div class="relative w-64">
          <select
            id="countrySelect"
            className="w-[156.67px] h-[48px] border rounded-md border-[#F1F1F1]"
          >
            <option
              value="+62"
              data-flag="https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg"
              className="w-full flex items-center justify-between px-4 py-5 border rounded bg-white "
            >
              +62
            </option>
            <option
              value="+1"
              data-flag="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
            >
              +1 (USA)
            </option>
            <option
              value="+44"
              data-flag="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
            >
              +44 (UK)
            </option>
          </select>
          <div
            id="selectedFlag"
            className="absolute top-1/2 left-4 transform -translate-y-1/2"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg"
              alt="Flag"
              className="w-6 h-4 "
            />
          </div>
        </div>
        <Label label="Kata Sandi" />
      </AuthLayout>
    </div>
  );
}

export default Register;
