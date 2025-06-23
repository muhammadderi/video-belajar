import Button from "../atoms/Button";
import Navbar from "../molecules/Navbar";
import Footer from "../molecules/Footer";
import useUserLogin from "../../zustand/User";
import { useState } from "react";
import { updateUsers } from "../../services/videosApi";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user, setUserLogin } = useUserLogin();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    fullName: "",
    email: "",
    country: "",
    phone: "",
    image: "",
  });
  console.log(user);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updateFields = {};

    if (data.fullName && data.fullName !== user.fullName) {
      updateFields.fullName = data.fullName;
    }
    if (data.email && data.email !== user.email) {
      updateFields.email = data.email;
    }
    if (data.country && data.country !== user.country) {
      updateFields.country = data.country;
    }
    if (data.phone && data.phone !== user.phone) {
      updateFields.phone = data.phone;
    }

    if (data.image && data.image !== user.image) {
      formData.append("image", data.image);
    }

    if (Object.keys(updateFields).length === 0) {
      toast.warning("Tidak ada perubahan data.");
      return;
    }

    try {
      const response = await updateUsers(user.id, updateFields);
      setUserLogin(response);
      console.log("Update berhasil:", response);
      toast.success("Profil berhasil di perbarui!");
    } catch (error) {
      console.log("Gagal update: ", error.message);
      toast.error("Gagal perbarui profil");
    }
  };
  return (
    <div>
      <Navbar />
      <div>
        <div className="grid md:grid-cols-[20%_80%] grid-cols-1 md:py-20 md:px-28 gap-5 p-5">
          <div>
            <div className="mb-3">
              <h1 className="font-bold text-2xl">Ubah Profile</h1>
              <p>Ubah data diri Anda</p>
            </div>
            <div className="shadow-xl my-2 border border-gray-300 p-4 text-gray-500 rounded-md">
              <p className="flex gap-2 mb-3 hover:border hover:p-2 hover:bg-orange-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                Profil Saya
              </p>
              <p className="flex gap-2 mb-3 hover:border hover:p-2 hover:bg-orange-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                  />
                </svg>
                Kelas Saya
              </p>
              <p className="flex gap-2 mb-3 hover:border hover:p-2 hover:bg-orange-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                Pesanan Saya
              </p>
            </div>
          </div>
          <div className="border border-gray-300 p-5 rounded-md">
            <div className="flex gap-5">
              <div className="mb-3">
                {user?.image?.jpg ? (
                  <img
                    src={user.image.jpg}
                    alt="profile"
                    className="w-24 h-24"
                  />
                ) : (
                  <img
                    src="bg-hero.jpg"
                    alt="default profile"
                    className="w-24 h-24"
                  />
                )}
              </div>
              <div>
                <h1 className="font-bold text-xl">{user?.fullName}</h1>
                <p>{user?.email}</p>
                <Button
                  text={"Ganti Foto Profil"}
                  className={"text-red-500 font-bold"}
                  onClick={() => setOpen(!open)}
                />
                {open && (
                  <div className="py-3">
                    <input
                      type="file"
                      accept="image/"
                      onChange={(e) =>
                        setData({ ...data, image: e.target.files[0] })
                      }
                    />
                  </div>
                )}
              </div>
            </div>
            <hr />
            <form onSubmit={handleUpdate}>
              <div className="flex flex-col md:flex-row md:gap-2 gap-3">
                <div className="relative w-full max-w-md">
                  <label
                    htmlFor="fullname"
                    className="absolute -top-2 left-3 bg-white px-1 text-gray-900 hover:text-green-500  text-sm z-10"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    value={data.fullName}
                    onChange={(e) =>
                      setData({ ...data, fullName: e.target.value })
                    }
                    className="w-full border border-gray-500 hover:border-green-500 placeholder:text-gray-900  rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                    placeholder={user.fullName}
                  />
                </div>
                <div className="relative w-full max-w-md">
                  <label
                    htmlFor="email"
                    className="absolute -top-2 left-3 bg-white px-1 text-gray-900 hover:text-green-500 text-sm z-10"
                  >
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-500 hover:border-green-500 placeholder:text-gray-900 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                    placeholder={user.email}
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                </div>
                <div className="flex gap-2 w-full">
                  <select
                    name="country"
                    id="country"
                    value={data.country}
                    onChange={(e) =>
                      setData({ ...data, country: e.target.value })
                    }
                    className="border border-gray-500 hover:border-green-500 rounded-md"
                  >
                    <option>{user.country}</option>
                    <option value="+1">+1</option>
                    <option value="+62">+62</option>
                  </select>
                  <div className="relative w-full max-w-md">
                    <label
                      htmlFor="handphone"
                      className="absolute -top-2 left-3 bg-white px-1 text-gray-500 hover:text-green-500 text-sm z-10"
                    >
                      No.Hp
                    </label>
                    <input
                      type="number"
                      id="phone"
                      placeholder={user.phone}
                      value={data.phone}
                      onChange={(e) =>
                        setData({ ...data, phone: e.target.value })
                      }
                      className="w-full border border-gray-500 hover:border-green-500 placeholder:text-gray-900 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                    />
                  </div>
                </div>
              </div>
              <div className="text-right my-5">
                <Button
                  type={"submit"}
                  text={"Simpan"}
                  className={"bg-green-500 text-white py-2 px-5 rounded-xl"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyProfile;
