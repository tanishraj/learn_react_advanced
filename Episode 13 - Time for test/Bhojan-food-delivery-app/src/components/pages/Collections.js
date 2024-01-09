import { useCollectionsApi } from "../../hooks/useCollectionsApi";
import { BasicContent } from "../atoms/BasicContent";
import { ComponentMapper } from "../templates/ComponentMapper";

export const Collections = () => {
  const { collectionPageData } = useCollectionsApi();

  if (collectionPageData.length === 0) return;

  return (
    <div>
      <BasicContent
        propsData={collectionPageData?.[0]?.card?.card}
        isDivider={false}
      />

      <div className="grid grid-cols-4 gap-4">
        {collectionPageData?.map((section, index) => (
          <ComponentMapper key={index} propsData={section?.card?.card} />
        ))}
      </div>
    </div>
  );
};
