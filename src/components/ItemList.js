import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  console.log(items, "Items");

  const dispatch = useDispatch();

  const handleAdd = (items) => {
    dispatch(addItem(items));
  };

  return (
    <>
      {/* {items.map((items) => ( */}
      <div
        key={items?.card?.info?.id}
        className="flex justify-between border-b-2 m-4 p-4"
      >
        <div className="p-4 m-4">
          <h3 className="font-bold">{items?.card?.info?.name}</h3>
          <h4 className="font-bold">
            ₹
            {items?.card?.info?.price
              ? items?.card?.info?.price / 100
              : items?.card?.info?.defaultPrice / 100}
          </h4>
          <p className="text-[#0000009c]">{items?.card?.info?.category}</p>
        </div>
        <div className="flex flex-col items-center">
          {items?.card?.info?.imageId ? (
            <img
              src={`${CDN_URL}/${items?.card?.info?.imageId}`}
              alt={items?.card?.info?.name}
              className="w-36 h-36 object-cover mb-2 p-4 rounded-lg"
            />
          ) : null}
          <div className="absolute mt-32 rounded-lg bg-black text-white">
            <button className="p-1 w-[60px]" onClick={() => handleAdd(items)}>
              Add +
            </button>
          </div>
        </div>
      </div>
      {/* ))} */}
    </>
  );
};

export default ItemList;
