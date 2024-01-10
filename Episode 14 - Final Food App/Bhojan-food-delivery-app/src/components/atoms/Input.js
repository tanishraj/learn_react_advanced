import { forwardRef } from "react";
import { MdClose } from "react-icons/md";
import { TbChevronLeft } from "react-icons/tb";

export const Input = (props) => {
  const {
    showClearButton,
    onEnter,
    showBackButton,
    onClear,
    value,
    ...restProps
  } = props;
  return (
    <div className="relative flex items-center">
      {showBackButton && (
        <button className="absolute left-0 px-3 py-3">
          <TbChevronLeft size={30} />
        </button>
      )}
      <input
        className={`border text-black text-250 font-medium border-grey400 ${
          showBackButton ? "pl-11" : "pl-4"
        } pr-11 py-3 rounded-sm outline-none w-full`}
        onKeyUp={(keyEvent) =>
          keyEvent.code === "Enter" && onEnter && onEnter()
        }
        value={value}
        {...restProps}
      />
      {showClearButton && (
        <button className="absolute right-0 px-3 py-3" onClick={onClear}>
          <MdClose size={30} />
        </button>
      )}
    </div>
  );
};
