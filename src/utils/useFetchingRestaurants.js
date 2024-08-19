import { useState, useEffect } from "react";
const useFetchingRestaurants = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data?.json();

      const restaurant =
        json?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants ||
        [];
      setListOfRestaurant(restaurant);
    } catch (error) {
      console.error("Fetching Restaurant Error", error);
      setListOfRestaurant([]);
    }
  };
  return [listOfRestaurant, setListOfRestaurant];
};
export default useFetchingRestaurants;
