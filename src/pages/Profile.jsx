import { useEffect, useState } from "react";
import NavbarHome from "../components/atoms/NavbarHome";
import Footer from "../components/organisms/Footer";
import Button from "../components/atoms/Button";
import InputFieldset from "../components/molecules/InputFieldset";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate();

  const handleClickImage = () => {
    setShowInput(true);
  };

  const handleDeleteImage = () => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      image: null,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64Image = reader.result;
        setProfile((prevProfile) => ({
          ...prevProfile,
          image: base64Image,
        }));
        localStorage.setItem("profileImage", base64Image);
      };
    }
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    country: "",
    phone: "",
    sex: "",
    password: "",
    confirmPassword: "",
    image: null,
  });

  useEffect(() => {
    if (profile.country === "Indonesia") {
      setProfile((prev) => ({ ...prev, country: "+62" }));
    } else if (profile.country === "Inggris") {
      setProfile((prev) => ({ ...prev, country: "+1" }));
    } else if (profile.country === "Amerika") {
      setProfile((prev) => ({ ...prev, country: "+44" }));
    }
  }, [profile.country]);

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
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loginUsers = JSON.parse(localStorage.getItem("loginUsers"));
    console.log("users", users);
    console.log("login", loginUsers);

    if (!loginUsers || !loginUsers.email) {
      toast.error("Tidak ada pengguna yang sedang login", {
        position: "top-center",
      });
      return;
    }

    const updatedUsers = users.map((user) =>
      user.email === loginUsers.email ? profile : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    toast.success("Profil berhasil di perbaharui");
    navigate("/profile");
  };

  return (
    <div>
      <ToastContainer />
      <NavbarHome />
      <section className="md:px-[120px] md:py-[64px] md:grid md:grid-cols-[30%_60%] w-full px-[20px] py-[28px]">
        <div className="w-[292px] h-[291px]">
          <h5 className="font-poppins font-semibold text-[20px] leading-[24x]">
            Ubah Profil
          </h5>
          <p className="text-[#333333AD] mb-[10px]">Ubah data diri anda</p>
          <div className="md:w-[292px] w-[335px] h-[211px] border rounded-xl p-[24px]">
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
        <div className="md:w-[872px] md:h-[308px] rounded-xl border p-[24px]">
          <div className="flex gap-3">
            {profile.image ? (
              <img
                src={
                  profile.image ? profile.image : "/src/assets/home/user.png"
                }
                alt="profile-user"
                className="w-[92px] h-[92px]"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600">Profile</span>
              </div>
            )}

            <div>
              <h5 className="capitalize font-poppins font-semibold text-[20px] leading-[24px]">
                {profile.fullName}
              </h5>
              <p className="lowercase  font-normal text-[18px] leading-[25.2px] ">
                {profile.email}
              </p>
              <p className="font-bold text-[16px] leading-[22.4px] text-[#F64920]">
                <button onClick={handleClickImage}>Ganti Foto Profil</button>
                <br />
                <button onClick={handleDeleteImage}>Delete Foto Profil</button>
              </p>
            </div>

            {showInput && (
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="border p-2 rounded-md w-26 h-12 "
              />
            )}
          </div>
          <br />
          <hr className="border rounded-xl " />
          <br />
          <div>
            <form onSubmit={handleUpdate}>
              <div className="md:flex gap-2">
                <InputFieldset
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={profile.fullName}
                  onChange={handleChange}
                />
                <InputFieldset
                  type="text"
                  id="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                />
                <fieldset className="px-3 md:hidden w-[324px] md:w-[90px] h-[55px] rounded-xl border border-solid border-gray-300 hover:border-[#3ECF4C]">
                  <legend className="px-2 text-gray-600">Jenis Kelamin</legend>
                  <select
                    name="sex"
                    id="sex"
                    value={profile.sex}
                    onChange={handleChange}
                    className=" outline-none border-none flex-1 bg-transparent px-3"
                  >
                    <option value="man">Laki-laki</option>
                    <option value="woman">Perempuan</option>
                  </select>
                </fieldset>
                <div className="flex gap-2">
                  <fieldset className="px-3 md:w-[90px] w-[50px] h-[55px] rounded-xl border border-solid border-gray-300 hover:border-[#3ECF4C]">
                    <legend className="px-2 text-gray-600">Kode</legend>
                    <select
                      name="country"
                      id="country"
                      value={profile.country}
                      onChange={handleChange}
                      className=" outline-none border-none flex-1 bg-transparent px-3"
                    >
                      <option value="+62">+62</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                    </select>
                  </fieldset>
                  <fieldset className="md:w-[158px] w-[220px] h-[55px] rounded-xl border border-solid border-gray-300 hover:border-[#3ECF4C]">
                    <legend className="px-2 text-gray-600">No HP</legend>
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
                <fieldset className="relative flex items-center md:hidden md:w-[264px] w-[324px] h-[55px] rounded-xl border border-solid border-gray-300 hover:border-[#3ECF4C] px-3">
                  <legend className="px-2 text-gray-600">Password</legend>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={profile.password}
                    onChange={handleChange}
                    className="outline-none border-none flex-1 bg-transparent h-full py-1 pr-10 text-base"
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center"
                    onClick={togglePassword}
                  >
                    <img
                      src={
                        showPassword
                          ? "/eye/icons8-eye-24.png"
                          : "/eye/mdi_eye-off.png"
                      }
                      alt="Toggle password visibility"
                      className="w-6 h-6"
                    />
                  </button>
                </fieldset>
                <fieldset className="relative flex items-center md:hidden md:w-[264px] w-[324px] h-[55px] rounded-xl border border-solid border-gray-300 hover:border-[#3ECF4C] px-3">
                  <legend className="px-2 text-gray-600">
                    Konfirmasi Password
                  </legend>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={profile.confirmPassword}
                    onChange={handleChange}
                    className="outline-none border-none flex-1 bg-transparent h-full py-1 pr-10 text-base"
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center"
                    onClick={togglePassword}
                  >
                    <img
                      src={
                        showPassword
                          ? "/eye/icons8-eye-24.png"
                          : "/eye/mdi_eye-off.png"
                      }
                      alt="Toggle password visibility"
                      className="w-6 h-6"
                    />
                  </button>
                </fieldset>
              </div>
              <br />
              <Button
                bgcolor={"bg-[#3ECF4C]"}
                textButton={"Simpan"}
                type={"submit"}
                color={
                  "text-[white] py-[10px] px-[26px] text-[16px] font-bold leading-[22.4px] hover:bg-white hover:text-[#3ECF4C] hover:border-[#3ECF4C] hover:border"
                }
              >
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center"
                  onClick={togglePassword}
                >
                  <img
                    src={
                      showPassword
                        ? "/eye/icons8-eye-24.png"
                        : "/eye/mdi_eye-off.png"
                    }
                    alt="Toggle password visibility"
                    className="w-6 h-6"
                  />
                </button>
              </Button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Profile;
