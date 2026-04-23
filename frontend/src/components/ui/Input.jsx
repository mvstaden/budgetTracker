const Input = ({
  name,
  inputType,
  placeholder,
  label,
  inputValue,
  inputOnChange,
}) => {
  return (
    <div className="flex flex-col gap-1 ">
      <label htmlFor="email">{label}</label>
      <input
        type={inputType}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={inputOnChange}
        value={inputValue}
        className="border border-beige500 rounded-lg px-5 py-3"
      />
    </div>
  );
};
export default Input;
