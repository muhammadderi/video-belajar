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
            <h1 className="font-poppins font-bold text-5xl leading-[52px] text-center text-white">
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video{" "}
              Interaktif!
            </h1>
            <p className="font-dm-sans py-2 font-medium text-base leading-[22.4px] text-center text-white">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
              pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
              berpartisipasi dalam latihan interaktif yang akan meningkatkan
              pemahaman Anda.
            </p>
            <div className="flex justify-center items-center py-2">
              <Button
                size="h-[42px] w-[369px]"
                bgcolor="bg-[#3ECF4C] text-white font-dm-sans leading-[22.4px] font-bold"
                textButton="Temukan Video Course Untuk Di Pelajari!"
              />
            </div>
          </article>
        </SectionWrapper>
        <section className="w-full py-[10px] px-[120px]">
          <h3 className="font-poppins font-semibold text-[32px] leading-[35.2px]">
            Koleksi Video Pembelajaran Unggulan
          </h3>
          <p className="font-dm-sans font-medium py-2 text-base leading-[22.4px] tracking-tight text-gray-500 ">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
          <div className="w-[612px] h-[52px]">
            <ul className="font-dm-sans font-medium py-2 text-base leading-[22.4px] tracking-tight text-gray-500 flex gap-10">
              <li>
                <a href="">Semua Kelas</a>
              </li>
              <li>
                <a href="">Pemasaran</a>
              </li>
              <li>
                <a href="">Desain</a>
              </li>
              <li>
                <a href="">Pengembangan Diri</a>
              </li>
              <li>
                <a href="">Bisnis</a>
              </li>
            </ul>
          </div>
          <CardList />
        </section>
        <SectionWrapper
          height="h-[400px] relative bg-cover bg-center"
          url="bg-[url(/backgroundImages/bg-2.png)]"
        >
          <article className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 flex items-center justify-center flex-col px-[140px] gap-2">
            <h3 className="font-dm-sans font-medium text-lg leading-6 tracking-[0.2px] text-[#C1C2C4]">
              NEWSLETTER
            </h3>
            <h1 className="font-poppins font-bold text-3xl leading-[35.2px] text-center text-white">
              Mau Belajar Lebih Banyak?
            </h1>
            <p className="font-dm-sans font-normal text-base leading-[22.4px] tracking-[0.2px] text-[#F4F5FA] text-center">
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
              spesial dari program-program terbaik hariesok.id
            </p>
            <div class="relative w-[525px]">
              <input
                type="text"
                class="w-full border rounded-lg pl-3 pr-12 py-2 focus:ring focus:ring-blue-300"
                placeholder="Masukkan Emailmu"
              />
              <button class="absolute inset-y-0 right-0 px-3 m-1 bg-[#FFBD3A] text-white font-dm-sans font-bold text-base rounded-lg hover:bg-orange-600 leading-[22.4px]">
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
