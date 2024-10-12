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
          <div className="filter-btn md:flex justify-around m-8 ">
            {/* <button
              className="shadow-lg w-36 p-2.5 rounded-3xl"
              onClick={() => {
                const filteredRestaurant = listOfRestaurant.filter(
                  (res) => res.info.avgRatingString > 4.3
                );
                setListOfRestaurant(filteredRestaurant);
              }}
            >
              Filter food
            </button> */}
            <div className="relative left-0  md:w-[600px]">
              <input
                type="text"
                className="w-full p-2 border border-[#FF5200] focus:border-[#FF5200] pr-20"
                value={searchText}
                onChange={handleSearch}
                placeholder="Search..."
              />
              <button
                className="absolute top-0 right-0 h-full w-36 text-white bg-[#FF5200] shadow-xl"
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
