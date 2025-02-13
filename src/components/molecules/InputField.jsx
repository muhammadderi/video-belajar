const InputField = ({ label, id, type, placeholder, eye, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="font-dm-sans font-normal md:text-base text-[14px] text-[#333333AD] "
      >
        {label}{" "}
        <sup className="text-red-500 font-poppins font-normal text-base leading-6">
          *
        </sup>
      </label>
      <div className="relative w-full">
        <input
          className="md:w-[518px] h-[48px] w-[280px]  border rounded-md border-[#F1F1F1] p-3"
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
        />

        {eye && (
          <button
            type="button"
            className="absolute inset-y-1 right-4 flex items-center"
          >
            <img
              src={eye}
              alt="Eye-Icon"
              className="md:w-6 md:h-6 w-[24px] h-[24px]"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
