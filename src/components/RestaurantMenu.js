import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import MENU_API_URL from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

  if (!resInfo || !itemCards) {
    return <div>Error: Restaurant or menu information is not available.</div>;
  }
  return (
    <div className="menu">
      <img src={`${CDN_URL}/${cloudinaryImageId}`} width={200} height={200} />
      <h2>{name}</h2>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h3>{itemCards[0].card.info.name}</h3>
      <ol>
        {itemCards.map((item, index) => (
          <div key={index}>
            {/* <img src={`${CDN_URL}/${itemImages}`} /> */}
            <li>
              {item?.card?.info?.name}
              {item?.card?.info?.price || item?.card?.info?.defaultPrice}
            </li>
          </div>
        ))}
      </ol>
    </div>
  );
};
export default RestaurantMenu;
