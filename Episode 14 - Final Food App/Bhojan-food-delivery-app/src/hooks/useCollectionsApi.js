import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  COLLECTION_PAGE_API,
  COLLECTION_PAGE_API_FRACTION,
} from "../utils/constants";

export const useCollectionsApi = () => {
  const { collectionId } = useParams();
  const [collectionPageData, setCollectionPageData] = useState([]);

  const getCollectionPageData = async () => {
    const data = await fetch(
      `${COLLECTION_PAGE_API}${collectionId}${COLLECTION_PAGE_API_FRACTION}`,
      {
        headers: {
          "x-cors-api-key": "temp_907965272042a5006e2ff57757f88d22",
        },
      }
    );
    const response = await data.json();
    setCollectionPageData(response?.data?.cards);
  };

  useEffect(() => {
    getCollectionPageData();
  }, [collectionId]);

  return { collectionPageData };
};
