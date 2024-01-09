import { useEffect, useState } from "react";
import { RESTAURANT_LIST_API_URL } from "../utils/constants";

export const useHomeApi = () => {
  const [homePageData, setHomePageData] = useState([]);

  const getHomePageData = async () => {
    const apiResponse = await fetch(RESTAURANT_LIST_API_URL);
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
