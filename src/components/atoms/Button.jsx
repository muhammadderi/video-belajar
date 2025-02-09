function Button({ bgcolor, img, textButton, color, font, size }) {
  return (
    <button
      className={`${size} rounded-xl ${bgcolor} ${color} ${font} flex justify-center gap-2 justify-items-center items-center`}
    >
      {img && <img src={img} alt="img-button" />}
      {textButton}
    </button>
  );
}

export default Button;
