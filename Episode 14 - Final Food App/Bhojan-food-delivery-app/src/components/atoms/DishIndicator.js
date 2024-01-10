export const DishIndicator = ({ dishType }) => {
  return (
    <div
      className={`indicator w-5 h-5 flex items-center justify-center border border-primary ${
        dishType === "VEG" ? "border-primary" : "border-red"
      } `}
    >
      <div
        className={`indicator-circle w-2.5 h-2.5 bg-primary rounded-full ${
          dishType === "VEG" ? "bg-primary" : "bg-red"
        } `}
      ></div>
    </div>
  );
};
