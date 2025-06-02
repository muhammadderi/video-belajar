import Button from "../atoms/Button";

const InputButton = () => {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <input
        type="text"
        placeholder="Masukkan Emailmu"
        className="w-full border border-gray-300 rounded-full p-2 md:py-4 md:px-6 pr-20 focus:outline-none focus:ring-2 focus:ring-[#FFBD3A]"
      />
      <Button
        text={"Subscribe"}
        className="absolute right-1 top-1 bottom-1 bg-[#FFBD3A] text-white px-4 rounded-full hover:bg-[#FFBD3A] transition font-bold"
      />
    </div>
  );
};

export default InputButton;
