function Button({ bgcolor, img, textButton, color, font }) {
  return (
    <button
      className={`w-[518px] h-[42px] rounded-xl ${bgcolor} ${color} ${font} flex justify-center gap-2`}
    >
      {img && <img src={img} alt="img-button" />}
      {textButton}
    </button>
  );
}

export default Button;
