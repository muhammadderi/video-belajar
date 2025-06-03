import Button from "../atoms/Button";
import Navbar from "../molecules/Navbar";

const AllProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="p-5">
        <h1 className="font-bold text-xl">
          Koleksi Video Pembelajaran Unggulan
        </h1>
        <p className="capitalize">
          jelajahi dunia pengetahuan melalui pilihan kami
        </p>
      </div>
      <div className="grid grid-cols-[30%_70%]">
        <div className="border border-grey-500 p-5 my-3 rounded-md">
          <div className="flex justify-between py-2">
            <p>Filter</p>
            <Button text={"Reset"} className={"text-red-500"} />
          </div>
          <div className="flex justify-between text-[#3ECF4C] border border-grey-500 rounded-md p-3 flex-col gap-2">
            <div className="flex justify-between w-full">
              <div className="flex gap-3">
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
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                  />
                </svg>
                <p>Bidang Studi</p>
              </div>
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
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div>
              <ul>
                <li>
                  <label
                    htmlFor=""
                    className="flex items-center gap-2 text-[#3ECF4C]"
                  >
                    <input type="checkbox" className="w-4 h-4" />
                    Pemasaran
                  </label>
                </li>
              </ul>
              <ul>
                <li>
                  <label
                    htmlFor=""
                    className="flex items-center gap-2 text-[#3ECF4C]"
                  >
                    <input type="checkbox" className="w-4 h-4" />
                    Digital & Teknologi
                  </label>
                </li>
              </ul>
              <ul>
                <li>
                  <label
                    htmlFor=""
                    className="flex items-center gap-2 text-[#3ECF4C]"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-[#3ECF4C]"
                    />
                    Pengembangan Diri
                  </label>
                </li>
              </ul>
              <ul>
                <li>
                  <label className="flex items-center gap-2 text-[#3ECF4C]">
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-[#3ECF4C]"
                    />
                    Bisnis Manajemen
                  </label>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between text-[#3ECF4C] border border-grey-500 rounded-md p-3 flex-col gap-2">
            <div className="flex justify-between w-full">
              <div className="flex gap-3">
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
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                  />
                </svg>
                <p>Harga</p>
              </div>
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
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div>
              <ul>
                <li>
                  <label
                    htmlFor=""
                    className="flex items-center gap-2 text-[#3ECF4C]"
                  >
                    <input type="checkbox" className="w-4 h-4" />
                    Pemasaran
                  </label>
                </li>
              </ul>
              <ul>
                <li>
                  <label
                    htmlFor=""
                    className="flex items-center gap-2 text-[#3ECF4C]"
                  >
                    <input type="checkbox" className="w-4 h-4" />
                    Digital & Teknologi
                  </label>
                </li>
              </ul>
              <ul>
                <li>
                  <label
                    htmlFor=""
                    className="flex items-center gap-2 text-[#3ECF4C]"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-[#3ECF4C]"
                    />
                    Pengembangan Diri
                  </label>
                </li>
              </ul>
              <ul>
                <li>
                  <label className="flex items-center gap-2 text-[#3ECF4C]">
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-[#3ECF4C]"
                    />
                    Bisnis Manajemen
                  </label>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between text-[#3ECF4C] border border-grey-500 rounded-md p-3 flex-col gap-2">
            <div className="flex justify-between w-full">
              <div className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p>Durasi</p>
              </div>
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
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div>
              <ul>
                <li>
                  <label
                    htmlFor=""
                    className="flex items-center gap-2 text-[#3ECF4C]"
                  >
                    <input type="checkbox" className="w-4 h-4" />
                    Kurang dari 4 Jam
                  </label>
                </li>
              </ul>
              <ul>
                <li>
                  <label
                    htmlFor=""
                    className="flex items-center gap-2 text-[#3ECF4C]"
                  >
                    <input type="checkbox" className="w-4 h-4" />4 - 8 Jam
                  </label>
                </li>
              </ul>
              <ul>
                <li>
                  <label
                    htmlFor=""
                    className="flex items-center gap-2 text-[#3ECF4C]"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-[#3ECF4C]"
                    />
                    Lebih dari 8 Jam
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-5 flex gap-5 items-center">
          {/* Select Dropdown */}
          <div className="relative">
            <select
              name=""
              id=""
              className="appearance-none border border-gray-300 rounded-md py-1 px-3 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Urutkan</option>
              <option value="az">A - Z</option>
              <option value="za">Z - A</option>
            </select>
            {/* Icon panah */}
            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>

          {/* Input Search */}
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Cari Kelas"
              className="w-full pl-10 pr-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProfile;
