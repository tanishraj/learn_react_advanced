import { useEffect, useState } from "react";
import { HOME_PAGE_API, RESTAURANT_LIST_API_URL } from "../utils/constants";

export const useHomeApi = () => {
  const [homePageData, setHomePageData] = useState([]);

  const getHomePageData = async () => {
    const apiResponse = await fetch(HOME_PAGE_API);
    const swiggyData = await apiResponse.json();

    const {
      data: { cards },
    } = swiggyData;
    setHomePageData(cards);
  };

  useEffect(() => {
    getHomePageData();
  }, []);

  return { homePageData };
};
