import Button from "../components/atoms/Button";
import Navbar from "../components/atoms/NavbarHome";
import SectionWrapper from "../components/atoms/SectionWrapper";
import CardList from "../components/organisms/CardList";
import Footer from "../components/organisms/Footer";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <SectionWrapper
          height="h-[400px] relative bg-cover bg-center"
          url="bg-[url(assets\home\section-1\bg-section-1.jpg)]"
        >
          <article className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 flex items-center justify-center flex-col px-[140px]">
            <div className="w-[280px] md:w-[920px]">
              <h1 className="font-poppins font-bold md:text-5xl md:leading-[52px] text-[24px] leading-[26.4px] text-center text-white">
                Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video{" "}
                Interaktif!
              </h1>
              <p className="font-dm-sans py-2 font-medium md:text-base md:leading-[22.4px] text-[14px] leading-[19.6px] text-center text-white">
                Temukan ilmu baru yang menarik dan mendalam melalui koleksi
                video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda
                juga dapat berpartisipasi dalam latihan interaktif yang akan
                meningkatkan pemahaman Anda.
              </p>
            </div>
            <div className="flex justify-center items-center py-2">
              <Button
                size="h-[42px] md:w-[369px] w-[280px]"
                bgcolor="bg-[#3ECF4C] text-white font-dm-sans leading-[22.4px] md:font-bold text-[14px] md:text[16px]"
                textButton="Temukan Video Course Untuk Di Pelajari!"
              />
            </div>
          </article>
        </SectionWrapper>
        <section className="w-full py-[10px] md:px-[120px] px-[20px]">
          <h3 className="font-poppins font-semibold md:text-[32px] md:leading-[35.2px] text-[24px] leading-[26.4px]">
            Koleksi Video Pembelajaran Unggulan
          </h3>
          <p className="font-dm-sans font-medium py-2 md:text-base md:leading-[22.4px] text-sm leading-[19.6px] tracking-tight text-gray-500 ">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
          <div className="md:w-[612px] w-[360px] h-[52px] box-border">
            <ul className="md:w-full w-[360px] font-dm-sans md:font-medium text-sm py-2 text-base leading-[22.4px] tracking-tight text-gray-500 flex md:gap-10 gap-2">
              <li className="relative after:block after:h-[5px] after:bg-[#F64920] after:w-full after:absolute after:left-0 after:bottom-[-10px]">
                <a href="#">Semua Kelas</a>
              </li>

              <li className="hover:underline-offset-8 hover:decoration-4 hover:underline hover:decoration-[#F64920] hover:mb-[10px]">
                <a href="#">Pemasaran</a>
              </li>
              <li className="hover:underline-offset-8 hover:decoration-4 hover:underline hover:decoration-[#F64920] hover:mb-[10px]">
                <a href="#">Desain</a>
              </li>
              <li className="hover:underline-offset-8 hover:decoration-4 hover:underline hover:decoration-[#F64920] hover:mb-[10px]">
                <a href="#">Pengembangan Diri</a>
              </li>
              <li className="hover:underline-offset-8 hover:decoration-4 hover:underline hover:decoration-[#F64920] hover:mb-[10px]">
                <a href="#">Bisnis</a>
              </li>
            </ul>
          </div>
          <CardList />
        </section>
        <SectionWrapper
          height="h-[400px] relative bg-cover bg-center"
          url="bg-[url(/backgroundImages/bg-2.png)]"
        >
          <article className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 flex items-center justify-center flex-col md:px-[140px] px-[20px] gap-2">
            <h3 className="font-dm-sans font-medium md:text-lg md:leading-6 text-[16px] leading-[22.4px] tracking-[0.2px] text-[#C1C2C4]">
              NEWSLETTER
            </h3>
            <h1 className="font-poppins font-bold md:text-3xl md:leading-[35.2px] text-[24px] leading-[26.4px] text-center text-white">
              Mau Belajar Lebih Banyak?
            </h1>
            <p className="font-dm-sans font-normal md:text-base md:leading-[22.4px] text-[14px] leading-[19.6px] tracking-[0.2px] text-[#F4F5FA] text-center">
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
              spesial dari program-program terbaik hariesok.id
            </p>
            <div className="md:relative flex flex-col items-center gap-3 md:w-[525px] w-[280px]">
              <div className="relative w-full">
                <input
                  type="text"
                  className="text-center md:text-left w-full py-[10px] border rounded-lg md:pl-3 md:pr-12 md:py-2 focus:ring focus:ring-blue-300"
                  placeholder="Masukkan Emailmu"
                />
                <button className="absolute inset-y-0 right-0 px-3 bg-[#FFBD3A] text-white font-dm-sans font-bold text-base rounded-lg hover:bg-orange-600 leading-[22.4px] hidden md:block">
                  Subscribe
                </button>
              </div>
              <button className="w-full md:hidden py-[10px] bg-[#FFBD3A] text-white font-dm-sans font-bold text-base rounded-lg hover:bg-orange-600 leading-[22.4px]">
                Subscribe
              </button>
            </div>
          </article>
        </SectionWrapper>

        <Footer />
      </div>
    </>
  );
};

export default Home;
