const Input = ({ label, type, onChange, value, name, pattern, title }) => {
  return (
    <div className="w-full flex flex-col gap-2 px-5 py-1">
      <label htmlFor="">
        {label}
        <sup className="text-red-500">*</sup>
      </label>
      <input
        type={type}
        value={value}
        name={name}
        className="border border-md p-2 rounded-md"
        required
        onChange={onChange}
        pattern={pattern}
        title={title}
      />
    </div>
  );
};

export default Input;
