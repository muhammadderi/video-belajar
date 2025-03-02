import { useEffect, useState } from "react";
import NavbarHome from "../components/atoms/NavbarHome";
import Button from "../components/atoms/Button";
import Footer from "../components/organisms/Footer";

const Profile = () => {
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    country: "",
    phone: "",
  });

  useEffect(() => {
    if (profile.country === "Indonesia") {
      setProfile((prev) => ({ ...prev, country: "+62" }));
    } else if (profile.country === "Inggris") {
      setProfile((prev) => ({ ...prev, country: "+1" }));
    } else if (profile.country === "Amerika") {
      setProfile((prev) => ({ ...prev, country: "+44" }));
    }
  });

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loginUser = JSON.parse(localStorage.getItem("loginUsers"));

    if (loginUser && loginUser.email) {
      const savedProfile = users.find(
        (user) =>
          user.email.toLowerCase().trim() ===
          loginUser.email.toLowerCase().trim()
      );

      if (savedProfile) {
        setProfile(savedProfile);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleUpdate = () => {
    const users = JSON.parse(localStorage.getItem("users") || []);
    const loginUsers = JSON.parse(localStorage.getItem("loginUsers"));
    console.log("users", users);
    console.log("login", loginUsers);

    if (!loginUsers || !loginUsers.email) {
      alert("Tidak ada pengguna yang sedang login");
      return;
    }

    const updatedUsers = users.map((user) =>
      user.email === loginUsers.email ? profile : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    alert("Profil berhasil di perbaharui");
  };

  return (
    <div>
      <NavbarHome />
      <section className="px-[120px] py-[64px] grid grid-cols-[30%_70%]  w-full">
        <div className="w-[292px] h-[291px]">
          <h5 className="font-poppins font-semibold text-[20px] leading-[24x]">
            Ubah Profil
          </h5>
          <p className="text-[#333333AD] mb-[10px]">Ubah data diri anda</p>
          <div className="w-[292px] h-[211px] border rounded-xl p-[24px]">
            <p className="fill-[#3A354161] hover:fill-[#FFBD3A] group flex gap-2 text-[#3A354161] font-bold text-[16px] leading-[25.2px] rounded-sm p-[12px] hover:bg-[#FFF7D7CC] hover:text-[#FFBD3A]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-[24px] h-[24px] "
              >
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
              </svg>
              Profil Saya
            </p>

            <p className="flex gap-2 text-[#3A354161] font-bold text-[16px] leading-[25.2px] rounded-sm p-[12px] hover:bg-[#FFF7D7CC] hover:text-[#FFBD3A]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-[24px] h-[24px] hover:fill-[#FFBD3A] fill-[#3A354161]"
              >
                <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
              </svg>
              Kelas Saya
            </p>
            <p className="flex gap-2 text-[#3A354161] font-bold text-[16px] leading-[25.2px] rounded-sm p-[12px] hover:bg-[#FFF7D7CC] hover:text-[#FFBD3A]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="w-[24px] h-[24px] hover:fill-[#FFBD3A] fill-[#3A354161]"
              >
                <path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192 32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512L430 512c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32l-85.6 0L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192l-232.6 0L253.3 35.1zM192 304l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zm128 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
              </svg>
              Pesanan Saya
            </p>
          </div>
        </div>
        <div className="w-auto h-[308px] rounded-xl border p-[24px]">
          <div className="flex gap-3">
            <img
              src="\src\assets\home\user.png"
              alt="profile-user"
              className="w-[92px] h-[92px]"
            />
            <div>
              <h5 className="capitalize font-poppins font-semibold text-[20px] leading-[24px]">
                {profile.fullName}
              </h5>
              <p className="lowercase  font-normal text-[18px] leading-[25.2px] ">
                {profile.email}
              </p>
              <p className="font-bold text-[16px] leading-[22.4px] text-[#F64920]">
                Ganti Foto Profil
              </p>
            </div>
          </div>
          <br />
          <hr className="border rounded-xl " />
          <br />
          <div>
            <form onSubmit={handleUpdate}>
              <div className="flex gap-2">
                <fieldset className="w-[264px] h-[55px] rounded-xl  border border-solid border-gray-300 hover:border-[#3ECF4C]">
                  <legend>Nama Lengkap</legend>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={profile.fullName}
                    onChange={handleChange}
                    className="outline-none border-none flex-1 bg-transparent px-3"
                  />
                </fieldset>
                <fieldset className="w-[264px] h-[55px] rounded-xl  border border-solid border-gray-300 hover:border-[#3ECF4C]">
                  <legend>Email</legend>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    className="outline-none border-none flex-1 bg-transparent px-3"
                  />
                </fieldset>
                <fieldset className="w-[90px] h-[55px] rounded-xl border border-solid border-gray-300 hover:border-[#3ECF4C]">
                  <legend>Kode</legend>
                  <select
                    name="country"
                    id="country"
                    value={profile.country}
                    onChange={handleChange}
                    className="outline-none border-none flex-1 bg-transparent px-3"
                  >
                    <option value="Indonesia">+62</option>
                    <option value="Amerika">+1</option>
                    <option value="Inggris">+44</option>
                  </select>
                </fieldset>
                <fieldset className="w-[158px] h-[55px] rounded-xl border border-solid border-gray-300 hover:border-[#3ECF4C]">
                  <legend>No HP</legend>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    className="outline-none border-none flex-1 bg-transparent px-3"
                  />
                </fieldset>
              </div>
              <br />
              <div className="flex justify-end">
                <Button
                  bgcolor={"bg-[#3ECF4C]"}
                  textButton={"Simpan"}
                  type={"submit"}
                  color={
                    "text-[white] py-[10px] px-[26px] text-[16px] font-bold leading-[22.4px] hover:bg-white hover:text-[#3ECF4C] hover:border-[#3ECF4C] hover:border"
                  }
                />
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Profile;
