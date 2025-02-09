const InputField = ({ label, id, type, placeholder, eye }) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="font-dm-sans font-normal text-base text-[#333333AD] "
      >
        {label}{" "}
        <sup className="text-red-500 font-poppins font-normal text-base leading-6">
          *
        </sup>
      </label>
      <div className="relative w-full">
        <input
          className="w-[518px] h-[48px] border rounded-md border-[#F1F1F1] p-3"
          id={id}
          type={type}
          placeholder={placeholder}
          required
        />

        {eye && (
          <button
            type="button"
            className="absolute inset-y-1 right-4 flex items-center"
          >
            <img src={eye} alt="Eye-Icon" className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
