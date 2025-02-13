function Button({
  bgcolor,
  img,
  textButton,
  color,
  font,
  size,
  imgStyle,
  type,
}) {
  return (
    <button
      type={type}
      className={`${size} rounded-xl ${bgcolor} ${color} ${font} smit flex justify-center gap-2 justify-items-center items-center`}
    >
      {img && <img src={img} alt="img-button" className={imgStyle} />}
      {textButton}
    </button>
  );
}

export default Button;
