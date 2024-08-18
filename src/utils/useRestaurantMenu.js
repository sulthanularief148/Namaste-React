// useRestaurantMenu.js
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0843007&lng=80.2704622&restaurantId=${resId}`
      );
      const json = await response?.json();
      setResInfo(json?.data);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
