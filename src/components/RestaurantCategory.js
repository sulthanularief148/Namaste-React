import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showList, showExpanded }) => {
  return (
    <>
      <div className="md:w-1/2 mx-auto p-4 m-4 shadow-lg">
        <div
          className="font-bold flex justify-between cursor-pointer"
          onClick={showExpanded}
        >
          <span>
            {data?.title}({data?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showList && (
          <div>
            {data?.itemCards?.map((item) => (
              <ItemList items={item} key={item?.card?.info?.name} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default RestaurantCategory;
