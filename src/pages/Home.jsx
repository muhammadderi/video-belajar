import Button from "../components/atoms/Button";
import Navbar from "../components/atoms/NavbarHome";
import SectionWrapper from "../components/atoms/SectionWrapper";
import CardList from "../components/organisms/CardList";

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
          <p className="font-dm-sans font-medium py-2 text-base leading-[22.4px] tracking-tight text-gray-800 ">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
          <div className="w-[612px] h-[52px]">
            <ul className="font-dm-sans font-medium py-2 text-base leading-[22.4px] tracking-tight text-gray-800 flex gap-10">
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
      </div>
    </>
  );
};

export default Home;
