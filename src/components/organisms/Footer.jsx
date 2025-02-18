const Footer = () => {
  return (
    <>
      <footer className="flex flex-col md:flex-row flex justify-between items-start px-6 md:px-[120px] md:py-[60px] py-6 md:h-auto border-t border-[#3A35411F]">
        <div className="w-full md:w-[352px] flex flex-col gap-2 md:text-center text-left flex-end">
          <img
            src="Logo/FooterLogo.png"
            alt="logo"
            className="w-[204px] h-[56px] mmd:x-auto md:mx-0"
          />
          <h3 className="font-dm-sans text-left font-bold text-[18px] leading-[25.2px] tracking-[0.2px]">
            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
          </h3>
          <p className="ftext-left font-bold ont-normal font-dm-sans text-[16px] leading-[16px] tracking-[0.2px] text-[#222325]">
            Jl. Usman Effendi No. 50 Lowokwaru, Malang
          </p>
          <span className="text-left font-bold font-dm-sans font-normal text-[16px] leading-[22.4px] tracking-[0.2px] text-[#222325]">
            +62-877-7123-1234
          </span>
        </div>

        <div className="w-full md:w-auto">
          <div className="block sm:hidden tmd:ext-center text-left mt-4">
            <ul className="font-dm-sans text-base font-medium leading-[22.4px] tracking-[0.2px] text-[#333333AD] space-y-2">
              <li>
                <div className="flex items-center justify-between">
                  <strong>Kategori</strong>
                  <button>
                    <img
                      src="/Logo/arrowRight.png"
                      alt="arrow-right"
                      className="w-[24px] h-[24px]"
                    />
                  </button>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <strong>Perusahaan</strong>
                  <button>
                    <img
                      src="/Logo/arrowRight.png"
                      alt="arrow-right"
                      className="w-[24px] h-[24px]"
                    />
                  </button>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <strong>Komunitas</strong>
                  <button>
                    <img
                      src="/Logo/arrowRight.png"
                      alt="arrow-right"
                      className="w-[24px] h-[24px]"
                    />
                  </button>
                </div>
              </li>
            </ul>
          </div>

          <table className="hidden sm:table text-left w-[485px] h-[199px]">
            <thead>
              <tr className="font-dm-sans font-bold text-base leading-[22.4px]">
                <th>Kategori</th>
                <th>Perusahaan</th>
                <th>Komunitas</th>
              </tr>
            </thead>
            <tbody className="font-dm-sans text-base font-medium leading-[22.4px] tracking-[0.2px] text-[#333333AD]">
              <tr>
                <td>Digital & Teknologi</td>
                <td>Tentang Kami</td>
                <td>Tips Sukses</td>
              </tr>
              <tr>
                <td>Pemasaran</td>
                <td>FAQ</td>
                <td>Blog</td>
              </tr>
              <tr>
                <td>Manajemen Bisnis</td>
                <td>Kebijakan Privasi</td>
              </tr>
              <tr>
                <td>Pengembangan Diri</td>
                <td>Ketentuan Layanan</td>
              </tr>
              <tr>
                <td>Desain</td>
                <td>Bantuan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </footer>

      <hr className="w-full border-t border-gray-300" />

      <div className="flex flex-col md:flex-row md:justify-between text-left md:items-center md:px-6 md:px-[120px] px-[20px] py-[20px] md:text-center md:text-left sm:flex sm:flex-col-reverse sm:flex-start">
        <p className="text-sm">@2023 Gerobak Sayur All Rights Reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <img
            src="/imagesFooter/link.png"
            alt="LinkedIn"
            className="w-[35px] h-[35px] "
          />
          <img
            src="/imagesFooter/fb.png"
            alt="Facebook"
            className="w-[35px] h-[35px] "
          />
          <img
            src="/imagesFooter/ig.png"
            alt="Instagram"
            className="w-[35px] h-[35px] "
          />
          <img
            src="/imagesFooter/twitter.png"
            alt="Twitter"
            className="w-[35px] h-[35px] "
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
