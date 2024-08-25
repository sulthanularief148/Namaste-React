import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showExpanded, setShowExpanded] = useState(null);

  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  if (!resInfo || !itemCards) {
    return <div>Error: Restaurant or menu information is not available.</div>;
  }
  const handleCategoryClick = (index) => {
    setShowExpanded((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="menu ">
      <div className="shadow-2xl w-1/2 rounded-2xl mx-auto p-8 md:flex-row-reverse items-center hover:scale-110 transition-transform duration-300 cursor-pointer">
        <div className="p-12 flex justify-between items-center">
          <div>
            <h2 className="font-bold">{name}</h2>
            <h3>
              {cuisines.join(", ")} -
              <span className="font-bold">{costForTwoMessage}</span>
            </h3>
            <h3 className="text-[#0000009c]">{itemCards[0].card.info.name}</h3>
          </div>

          <img
            src={`${CDN_URL}/${cloudinaryImageId}`}
            className="md:w-[115px] rounded-xl object-cover md:h-[115px]"
          />
        </div>
      </div>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showList={index === showExpanded ? true : false}
          showExpanded={() => handleCategoryClick(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
