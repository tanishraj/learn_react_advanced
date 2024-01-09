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
      `${COLLECTION_PAGE_API}${collectionId}${COLLECTION_PAGE_API_FRACTION}`
    );
    const response = await data.json();
    console.log(response);

    setCollectionPageData(response?.data?.cards);
  };

  useEffect(() => {
    getCollectionPageData();
  }, [collectionId]);

  return { collectionPageData };
};
