import { useState } from "react";
import useFetchingRestaurants from "../utils/useFetchingRestaurants";
import { RestaurentCard } from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurant, setListOfRestaurant] = useFetchingRestaurants();
  const onlineStatus = useOnlineStatus();

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    const filteredRestaurant = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setListOfRestaurant(filteredRestaurant);
  };

  return (
    <>
      {/* bg-sky-500 */}
      {onlineStatus ? (
        <div className="body m-24">
          <div className="filter-btn flex justify-between m-8">
            <button
              className="shadow-lg w-36 p-2.5 rounded-3xl"
              onClick={() => {
                const filteredRestaurant = listOfRestaurant.filter(
                  (res) => res.info.avgRatingString > 4.3
                );
                setListOfRestaurant(filteredRestaurant);
              }}
            >
              Filter food
            </button>
            <div className="search-btn-container flex items-center gap-4">
              <input
                type="text"
                className="search-input h-7 border border-gray-950 rounded-3xl p-4"
                value={searchText}
                onChange={handleSearch}
                placeholder="Search..."
              />
              <button
                className="shadow-xl w-36 p-2.5 rounded-3xl"
                onClick={() => {
                  const filteredRestaurant = listOfRestaurant.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );
                  setListOfRestaurant(filteredRestaurant);
                }}
              >
                Search
              </button>
            </div>
          </div>

          <div className="res-container flex flex-wrap gap-8  justify-between">
            {listOfRestaurant.length > 0 ? (
              listOfRestaurant.map((res) => (
                <Link to={`/restaurants/${res?.info?.id}`} key={res?.info?.id}>
                  <RestaurentCard resData={res} />
                </Link>
              ))
            ) : (
              <Shimmer />
            )}
          </div>
        </div>
      ) : (
        <h1>Please Check your Internet Connection...</h1>
      )}
    </>
  );
};
