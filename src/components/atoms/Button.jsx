const Button = ({ type, onClick, className, text, disabled, img, alt }) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={className}
        disabled={disabled}
      >
        {img} {text}
      </button>
    </div>
  );
};

export default Button;
