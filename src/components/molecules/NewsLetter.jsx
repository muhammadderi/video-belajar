import InputButton from "./InputButton";

const NewsLetter = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="relative bg-[url('/bg-hero2.jpg')] bg-cover bg-center h-[400px] w-5/6">
        <div className="absolute inset-0 bg-black/50">
          <div className="text-white flex flex-col justify-center items-center md:px-52 px-5 py-10 gap-4">
            <h4 className="uppercase font-medium text-xl">newsletter</h4>
            <h1 className="capitalize md:text-5xl font-bold text-center text-2xl">
              Mau Belajar Lebih Banyak?
            </h1>
            <p className="md:text-xl text-md text-center">
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
              spesial dari program-program terbaik hariesok.id
            </p>
            <InputButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
