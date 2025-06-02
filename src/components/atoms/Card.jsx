const Card = ({
  image,
  title,
  subtitle,
  imgIcon,
  titleIcon,
  subtitleIcon,
  rating = 3.5,
  reviewCount = 86,
  price,
}) => {
  return (
    <div className="border rounded-xl shadow-md w-full max-w-md mx-auto p-4 flex flex-col gap-3 bg-white">
      <div className="w-full h-40 overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div>
        <h2 className="font-bold text-lg sm:text-xl">{title}</h2>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>

      <div className="flex items-center gap-3">
        <img
          src={imgIcon}
          alt={titleIcon}
          className="rounded-full h-10 w-10 object-cover"
        />
        <div>
          <h4 className="font-semibold text-sm">{titleIcon}</h4>
          <p className="text-xs text-gray-500">{subtitleIcon}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center text-sm text-gray-700 gap-1">
          <div className="text-yellow-400">★★★☆☆</div>
          <span>{rating}</span>
          <span className="text-gray-500">({reviewCount})</span>
        </div>
        <div className="text-green-500 font-bold text-lg">
          Rp {Math.round(price)}K
        </div>
      </div>
    </div>
  );
};

export default Card;
