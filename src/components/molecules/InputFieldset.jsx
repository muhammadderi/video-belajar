const InputFieldset = ({ type, id, name, value, onChange, width }) => {
  return (
    <>
      <fieldset
        className={`px-3 ${width} h-[55px] rounded-xl  border border-solid border-gray-300 hover:border-[#3ECF4C]`}
      >
        <legend className="px-2 text-gray-600">Nama Lengkap</legend>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="outline-none border-none flex-1 bg-transparent px-3"
        />
      </fieldset>
    </>
  );
};

export default InputFieldset;
