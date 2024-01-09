import { useHomeApi } from "../../hooks/useHomeApi";
import { ComponentMapper } from "../templates/ComponentMapper";

export const Home = () => {
  const { homePageData } = useHomeApi();

  return (
    <div>
      {homePageData?.map((section, index) => (
        <div key={index}>
          <ComponentMapper propsData={section?.card?.card} />
        </div>
      ))}
    </div>
  );
};
