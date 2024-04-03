import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HOME_PAGE_API } from "../utils/constants";

export const useHomeApi = () => {
  const [homePageData, setHomePageData] = useState([]);
  const { location } = useSelector((state) => state.location);
  const { lat, lng } = location?.geometry?.location ?? {};

  const getHomePageData = async () => {
    const apiResponse = await fetch(HOME_PAGE_API(lat, lng), {
      headers: {
        "x-cors-api-key": process.env.X_CORS_API_KEY,
      },
    });
    const swiggyData = await apiResponse.json();

    if (!swiggyData) return null;

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
