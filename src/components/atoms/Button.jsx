const Button = ({ type, onClick, className, text, disabled }) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={className}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
