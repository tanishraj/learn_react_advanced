export const Button = ({ label, ...restProps }) => {
  return (
    <button
      className=" absolute right-1 bottom-1 table m-auto bg-black rounded-sm px-2 py-1 text-300 leading-none font-semibold text-white cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-black"
      {...restProps}
    >
      {label}
    </button>
  );
};
