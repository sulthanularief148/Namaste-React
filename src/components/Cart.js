import React from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { MdDelete, MdFavoriteBorder } from "react-icons/md";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };
  const handleRemove = () => {
    dispatch(removeItem());
  };

  return (
    <div className="w-1/2 m-auto">
      <h2 className="text-center text-xl font-bold">Cart</h2>
      <div className="text-center">
        <button
          onClick={handleClear}
          className="bg-[#FF5200] p-3 w-24 text-white text-center rounded-xl"
        >
          Clear Cart
        </button>
      </div>

      {cartItems.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex justify-between border-b-2 m-4 p-4"
        >
          <div className="p-4 m-4">
            <h3 className="font-bold">{item?.card?.info?.name}</h3>
            <h4 className="font-bold">
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </h4>
            <p className="text-[#0000009c]">{item?.card?.info?.category}</p>
          </div>
          <div className="flex flex-col items-center">
            {item?.card?.info?.imageId ? (
              <img
                src={`${CDN_URL}/${item?.card?.info?.imageId}`}
                alt={item?.card?.info?.name}
                className="w-36 h-36 object-cover mb-2 p-4 rounded-lg"
              />
            ) : null}
            <div className="absolute mt-32 rounded-lg text-white">
              <button
                className="p-1 w-[60px]"
                onClick={() => handleRemove(item)}
              >
                <MdDelete size={24} color="#FF5200" />
              </button>
              <button
                className="p-1 w-[60px]"
                onClick={() => handleRemove(item)}
              >
                <MdFavoriteBorder size={24} color="#FF5200" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
