const Button = ({ children }) => {
  return (
    <button className="p-4 cursor-pointer bg-gray-900 hover:bg-grey900/95 text-white text-center w-full rounded-lg">
      {children}
    </button>
  );
};
export default Button;
