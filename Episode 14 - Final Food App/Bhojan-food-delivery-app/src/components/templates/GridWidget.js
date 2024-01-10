import { COMPONENT_HASH, HEADER_HASH } from "../../utils/componentHash";
import { ImageInfoLayoutCard } from "../molecules/ImageInfoLayoutCard";

export const GridWidget = ({ propsData }) => {
  const { header, id, gridElements } = propsData;
  const ChildComponent =
    COMPONENT_HASH?.[gridElements?.infoWithStyle?.["@type"]];

  return (
    <div className="mt-10">
      {(header?.title || HEADER_HASH[id]) && (
        <h2 className="font-bold text-grey800 text-400 mb-4">
          {header?.title ? header?.title : HEADER_HASH[id]}
        </h2>
      )}

      <div className="block">
        <ChildComponent propsData={propsData} />
      </div>
    </div>
  );
};
