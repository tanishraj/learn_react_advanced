import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HOME_PAGE_API } from "../utils/constants";

export const useHomeApi = () => {
  const [homePageData, setHomePageData] = useState([]);
  const { location } = useSelector((state) => state.location);
  const { lat, lng } = location?.geometry?.location ?? {};

  const getHomePageData = async () => {
    const apiResponse = await fetch(HOME_PAGE_API(lat, lng));
    const swiggyData = await apiResponse.json();

    const {
      data: { cards },
    } = swiggyData;
    setHomePageData(cards);
  };

  useEffect(() => {
    getHomePageData();
  }, [location]);

  return { homePageData };
};
