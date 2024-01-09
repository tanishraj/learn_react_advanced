import { Link } from "react-router-dom";

export const BrandItem = ({ brandItem, ...restProps }) => {
  const { text, _link } = brandItem;
  return (
    <Link
      to="#"
      className="border border-solid border-grey500 rounded-md p-4 text-center text-100"
    >
      <span className="line-clamp-1">{text}</span>
    </Link>
  );
};
