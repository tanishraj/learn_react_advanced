import { useEffect, useState } from "react";
export const useNavigator = () => {
  const [currentLocation, setCurrentLocation] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentLocation(() => {
        setLoading(false);
        return { lat: latitude, lng: longitude };
      });
    });
  }, []);

  return { currentLocation, loading };
};
