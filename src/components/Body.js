import { Link } from "react-router-dom";
import { useState } from "react";
import useFetchingRestaurants from "../utils/useFetchingRestaurants";
import { RestaurentCard, withOffer } from "./RestaurentCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurant, setListOfRestaurant] = useFetchingRestaurants();
  const RestaurantCardWithOffer = withOffer(RestaurentCard);

  const onlineStatus = useOnlineStatus();

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchText(searchValue);

    if (searchValue === "") {
      setListOfRestaurant(listOfRestaurant);
    } else {
      const filteredRestaurant = listOfRestaurant.filter((res) =>
        res.info.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setListOfRestaurant(filteredRestaurant);
    }
  };

  return (
    <>
      {onlineStatus ? (
        <div className="body m-24">
          <div className="filter-btn md:flex justify-around m-8">
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
            <div className="search-btn-container md:flex items-center gap-4">
              <input
                type="text"
                className="md:w-[500px] search-input h-7 border border-gray-950 rounded-3xl p-4 focus:border-blue-500"
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
              listOfRestaurant.map((res) => {
                const offer = res?.info?.aggregatedDiscountInfoV3?.header;
                const subOffer = res?.info?.aggregatedDiscountInfoV3?.subHeader;
                const swiggyOffer = `${offer} ${subOffer}`;

                return (
                  <Link
                    to={`/restaurants/${res?.info?.id}`}
                    key={res?.info?.id}
                  >
                    {offer || subOffer ? (
                      <RestaurantCardWithOffer
                        resData={res}
                        swiggyOffer={swiggyOffer}
                      />
                    ) : (
                      <RestaurentCard resData={res} />
                    )}
                  </Link>
                );
              })
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      ) : (
        <h1>Please Check your Internet Connection...</h1>
      )}
    </>
  );
};
