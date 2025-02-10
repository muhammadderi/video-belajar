const StarRating = () => {
  return (
    <div className="flex justify-between justify-items-center items-center">
      <span className="flex">
        <img
          className="w-[18px] h-[18px]"
          src="src\assets\home\section-2\fullStar.png"
          alt="fullStar"
        />
        <img
          className="w-[18px] h-[18px]"
          src="src\assets\home\section-2\fullStar.png"
          alt="fullStar"
        />
        <img
          className="w-[18px] h-[18px]"
          src="src\assets\home\section-2\partialStar.png"
          alt="partialStar"
        />
        <img
          className="w-[18px] h-[18px]"
          src="src\assets\home\section-2\emptyStar.png"
          alt="emptyStar"
        />
        <img
          className="w-[18px] h-[18px]"
          src="src\assets\home\section-2\emptyStar.png"
          alt="emptyStar"
        />
        <span className="font-dm-sans font-medium text-sm leading-[19.6px] text-gray-800">
          3.5 (86)
        </span>
      </span>
      <h4 className="font-poppins font-semibold text-[24px] leading-[28.8px] text-[#3ECF4C]">
        Rp 300K
      </h4>
    </div>
  );
};

export default StarRating;
