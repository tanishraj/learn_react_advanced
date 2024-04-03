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
        "x-cors-api-key": "temp_907965272042a5006e2ff57757f88d22",
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
