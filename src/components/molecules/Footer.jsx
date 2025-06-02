import { useState } from "react";

const Footer = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const showButton = () => setShow((prev) => !prev);
  const showButton1 = () => setShow1((prev) => !prev);
  const showButton2 = () => setShow2((prev) => !prev);

  return (
    <div className="flex flex-col justify-between md:px-32 p-10 ">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center py-5">
          <div className="flex flex-col justify-center items-start ">
            <img src="./logoFooter.png" alt="video-belajar" className="py-2" />
            <h2 className="font-bold text-md">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </h2>
            <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
            <span>+62-877-7123-1234</span>
          </div>
          <div className="w-full md:w-auto py-2 md:py-0">
            <div className="flex md:gap-5 flex-col md:flex-row ">
              <div>
                <div className="flex justify-between">
                  <h1 className="font-bold" onClick={() => showButton()}>
                    Kategori
                  </h1>
                  <div className="md:hidden">
                    {show ? (
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
                    ) : (
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
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <div className={`${show ? "block" : "hidden"} md:block}`}>
                  <p>Digital dan Teknologi</p>
                  <p>Pemasaran</p>
                  <p>Manajemen Bisnis</p>
                  <p>Pengembangan Diri</p>
                  <p>Desain</p>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <h1 className="font-bold" onClick={() => showButton1()}>
                    {" "}
                    Perusahaan
                  </h1>
                  <div className="md:hidden">
                    {show1 ? (
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
                    ) : (
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
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <div className={`${show1 ? "block" : "hidden"} md:block`}>
                  <p>Tentang Kami</p>
                  <p>FAQ</p>
                  <p>Kebijakan Privasi</p>
                  <p>Ketentuan Layanan</p>
                  <p>Bantuan</p>
                </div>
              </div>
              <div>
                <div className=" flex justify-between">
                  <h1 className="font-bold" onClick={() => showButton2()}>
                    Komunitas
                  </h1>
                  <div className="md:hidden">
                    {show2 ? (
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
                    ) : (
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
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <div className={`${show2 ? "block" : "hidden"} md:block`}>
                  <p>Tips Sukses</p>
                  <p>Blog</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* pisah */}
        <hr />
        <div className="flex md:justify-between md:items-center py-5 flex-col md:flex-row gap-2 md:gap-0">
          <h1 className="order-2 md:order-1">@2025 Muhammad Dery Setiawan</h1>
          <div className="flex gap-3 order-1 md:order-2">
            <img
              src="./instagram.svg"
              alt="instagram"
              className="animate-bounce"
            />
            <img
              src="./facebook.svg"
              alt="facebook"
              className="animate-bounce"
            />
            <img
              src="./linkedin.svg"
              alt="linkedin"
              className="animate-bounce"
            />
            <img src="./twitter.svg" alt="twitter" className="animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
