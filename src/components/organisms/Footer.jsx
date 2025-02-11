const Footer = () => {
  return (
    <>
      <footer className="flex justify-between items-center  px-[120px] h-[400px] border-t border-[#3A35411F]">
        <div className="h-[220px] w-[352px] flex flex-col gap-2">
          <img
            src="Logo/FooterLogo.png"
            alt="logo"
            className="w-[204px] h-[56px]"
          />
          <h3 className="font-dm-sans font-bold font-[18px] leading-[25.2px] tracking-[0.2px]">
            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
          </h3>
          <p className="font-normal font-dm-sans text-[16px] leading-[16px] tracking-[0.2px] text-[#222325] ">
            Jl. Usman Effendi No. 50 Lowokwaru, Malang
          </p>
          <span className="font-dm-sans font-normal text-[16px] leading-[22.4px] tracking-[0.2px] text-[#222325]">
            +62-877-7123-1234
          </span>
        </div>
        <div>
          <table className="text-left w-[485px] h-[199px]">
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
      <hr className="w-[1200px] border-t border-gray-300 mx-auto" />

      <div className="flex justify-between items-center px-[120px] py-[20px] ">
        <div>
          <p>@2023 Gerobak Sayur All Rights Reserved.</p>
        </div>
        <div className="flex gap-2">
          <img src="\imagesFooter\link.png" alt="LinkedIn" />
          <img src="\imagesFooter\fb.png" alt="Facebook" />
          <img src="\imagesFooter\ig.png" alt="Instagram" />
          <img src="\imagesFooter\twitter.png" alt="Twitter" />
        </div>
      </div>
    </>
  );
};

export default Footer;
