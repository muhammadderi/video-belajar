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
    <div className="md:w-[360px] w-full  rounded-[10px] border p-5 mb-3">
      <div className="flex flex-col md:flex-col gap-1">
        <img
          src={img}
          alt={alt}
          className="w-full h-[147px] md:h-[200px] object-cover rounded-lg"
        />

        <div className="flex flex-col gap-3">
          <h6 className="font-poppins font-semibold text-[16px] md:text-lg leading-[19.2px] md:leading-[21.6px] text-[#222325]">
            {title}
          </h6>

          <p className="font-dm-sans text-base leading-[22.4px] text-gray-500 md:block hidden">
            {subTitle}
          </p>

          <div className="flex items-center gap-3">
            <img
              className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] object-cover rounded-full"
              src={imgMain}
              alt={altMain}
            />

            <div className="flex flex-col">
              <span className="font-dm-sans font-medium text-[14px] leading-[22.4px] tracking-[0.2px]">
                {mainTitle}
              </span>
              <span className="hidden md:block font-dm-sans text-[14px] text-gray-500">
                {mainSubTitle} <b>Gojek</b>
              </span>
              <span className="md:hidden font-dm-sans text-[12px] text-gray-500">
                Senior Accountant
              </span>
            </div>
          </div>
        </div>
      </div>
      <StarRating />
    </div>
  );
};

export default Card;
