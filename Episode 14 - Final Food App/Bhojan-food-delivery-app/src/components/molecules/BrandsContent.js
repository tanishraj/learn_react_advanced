import { useEffect, useState } from "react";
import { BrandItem } from "../atoms/BrandItem";

export const BrandsContent = ({ propsData }) => {
  const [showMore, setShowMore] = useState(false);
  const { brands, title } = propsData;

  useEffect(() => {
    if (brands.length > 11) setShowMore(true);
  }, [brands]);

  return (
    <div className="block">
      <hr className="text-grey300 my-4" />
      <h2 className="font-bold text-grey800 text-400 mb-4">{title}</h2>
      <div className={`grid grid-cols-${brands.length > 4 ? 4 : 2} gap-4`}>
        {brands?.map((brand, index) => {
          if (showMore && index >= 11) return null;
          return <BrandItem key={index} brandItem={brand} />;
        })}

        {brands.length >= 3 && (
          <button
            className="bg-white border border-solid border-primary rounded-md p-4 text-center text-100 font-bold hover:bg-primary hover:text-white transition-all"
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            Show {showMore ? "more" : "less"}...
          </button>
        )}
      </div>
    </div>
  );
};
