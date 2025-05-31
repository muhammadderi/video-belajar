const Card = ({
  image,
  title,
  subtitle,
  imgIcon,
  titleIcon,
  subtitleIcon,
  price,
}) => {
  return (
    <div className="border shadow-xl md:w-92 h-fit py-5 flex justify-center items-center mx-auto">
      <div className="h-[90%] w-[90%] flex md:flex-col gap-1 ">
        <img src={image} alt={title} />
        <h2 className="font-bold text-xl">{title}</h2>
        <p>{subtitle}</p>
        <div className="flex gap-5 justify-start items-center">
          <img src={imgIcon} alt={titleIcon} className="rounded-xl h-10 w-10" />
          <div>
            <h4>{titleIcon}</h4>
            <p>{subtitleIcon}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p>
            ⭐⭐⭐⭐⭐ <span>5.0</span>
          </p>
          <p className="text-[#3ECF4C] font-bold text-xl">
            Rp {Math.round(price)}K
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
