import Button from "../atoms/Button";
import Navbar from "../molecules/Navbar";
import Footer from "../molecules/Footer";

const MyProfile = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="grid grid-cols-[20%_80%] py-20 px-28 gap-5">
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
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                Pesanan Saya
              </p>
            </div>
          </div>
          <div className="border border-gray-300 p-5 rounded-md">
            <div className="flex gap-5">
              <div>
                <img
                  src="/logoFooter.png"
                  alt="profile"
                  className="w-24 h-24"
                />
              </div>
              <div>
                <h1 className="font-bold text-xl">Jennie</h1>
                <p>jeni@gmail.com</p>
                <Button
                  text={"Ganti Foto Profil"}
                  className={"text-red-500 font-bold"}
                />
              </div>
            </div>
            <hr />
            <form action="">
              <div className="flex gap-2">
                <div class="relative w-full max-w-md">
                  <label
                    for="fullname"
                    class="absolute -top-2 left-3 bg-white px-1 text-gray-500 hover:text-green-500  text-sm z-10"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    value="Jennie Ruby Jane"
                    class="w-full border border-gray-500 hover:border-green-500 text-gray-900 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                </div>
                <div class="relative w-full max-w-md">
                  <label
                    for="fullname"
                    class="absolute -top-2 left-3 bg-white px-1 text-gray-500 hover:text-green-500 text-sm z-10"
                  >
                    E-Mail
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    value="Jennie Ruby Jane"
                    class="w-full border border-gray-500 hover:border-green-500 text-gray-900 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                </div>
                <select
                  name=""
                  id=""
                  className="border border-gray-500 hover:border-green-500 rounded-md"
                >
                  <option value="">+62</option>
                </select>
                <div class="relative w-full max-w-md">
                  <label
                    for="fullname"
                    class="absolute -top-2 left-3 bg-white px-1 text-gray-500 hover:text-green-500 text-sm z-10"
                  >
                    No.Hp
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    value="Jennie Ruby Jane"
                    class="w-full border border-gray-500 hover:border-green-500 text-gray-900 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                </div>
              </div>
              <div className="text-right my-5">
                <Button
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
