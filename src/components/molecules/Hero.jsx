import Button from "../atoms/Button";

const Hero = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="relative bg-[url('/bg-hero.jpg')] bg-cover bg-center h-[500px] md:h-[400px] w-5/6">
        <div className="absolute inset-0 bg-black/50">
          <div className="text-white flex flex-col justify-center items-center md:px-52 px-5 py-10 gap-4">
            <h1 className="capitalize md:text-5xl font-bold text-center text-2xl">
              Revolusi Pembelajaran: temukan ilmu baru melalui platform video
              interaktif
            </h1>
            <p className="md:text-xl text-md text-center">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
              pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
              berpartisipasi dalam latihan interaktif yang akan meningkatkan
              pemahaman Anda.
            </p>
            <Button
              text={"Temukan Video Course Untuk Di Pelajari"}
              className={
                "bg-[#3ECF4C] text-white rounded-xl md:p-5 p-2 font-bold md:text-md hover:bg-white hover:text-[#3ECF4C]"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
