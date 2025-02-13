import StarRating from "./StarRating";

const Card = ({
  img,
  alt,
  title,
  subTitle,
  imgMain,
  altMain,
  mainTitle,
  mainSubTitle,
}) => {
  return (
    <div className="w-[360px] h-[420px] rounded-[10px] border p-[20px] mb-3 ">
      <div className="w-[320px] md:h-[193px] h-[147px] rounded-[10px]">
        <img
          src={img}
          alt={alt}
          className="md:w-[344px] md:h-[200px] pb-2 w-[82px] h-[82px]"
        />
        <h6 className="font-poppins font-semibold text-[16px] md:text-lg leading[21.6px] text-[#222325] pb-1">
          {title}
        </h6>
        <p className="font-dm-sans  text-base leading-[22.4px] text-gray-500 pb-1">
          {subTitle}
        </p>
        <div className="flex justify-items-center gap-[10px]">
          <div>
            <img className="w-[40px] h-[40px]" src={imgMain} alt={altMain} />
          </div>
          <div className="flex flex-col">
            <span className="font-dm-sans font-medium leading-[22.4px] tracking-[0.2px]">
              {mainTitle}
            </span>
            <span className="font-dm-sans font-normal text-[14px] leading-[19.6px] tracking-[0.2px] text-gray-500">
              {mainSubTitle} <b>Gojek</b>
            </span>
          </div>
        </div>
        <StarRating />
      </div>
    </div>
  );
};

export default Card;
