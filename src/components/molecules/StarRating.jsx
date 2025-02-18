const StarRating = () => {
  return (
    <div className="flex justify-between justify-items-center items-center">
      <span className="flex">
        <img
          className="w-[18px] h-[18px]"
          src="/star/fullStar.png"
          alt="fullStar"
        />
        <img
          className="w-[18px] h-[18px]"
          src="/star/fullStar.png"
          alt="fullStar"
        />
        <img
          className="w-[18px] h-[18px]"
          src="/star/partialStar.png"
          alt="partialStar"
        />
        <img
          className="w-[18px] h-[18px]"
          src="/star/emptyStar.png"
          alt="emptyStar"
        />
        <img
          className="w-[18px] h-[18px]"
          src="/star/emptyStar.png"
          alt="emptyStar"
        />
        <span className="font-dm-sans font-medium text-sm leading-[19.6px] text-gray-500">
          3.5 (86)
        </span>
      </span>
      <h4 className="font-poppins font-semibold md:text-[24px] md:leading-[28.8px] text-[20px] leading-[24px] text-[#3ECF4C]">
        Rp 300K
      </h4>
    </div>
  );
};

export default StarRating;
