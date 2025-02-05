import React from "react";
import AuthLayout from "../layouts/AuthLayout";
import Label from "../components/auth/Label";
import Button from "../components/auth/Button";

function Login() {
  return (
    <div>
      <AuthLayout
        title="Masuk Ke Akun"
        subtitle="Yuk, lanjutin belajarmu di videobelajar"
      >
        <Label id="email" type="email" label="Email" />
        <Label
          label="Password"
          id="password"
          type="password"
          eye="\src\assets\auth\mdi_eye-off.png"
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

export default Login;
