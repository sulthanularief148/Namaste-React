import { CDN_URL } from "../utils/constants";

export const RestaurentCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;

  const deliverTime = resData?.info?.sla?.deliveryTime;

  return (
    <div className="restaurent-card w-[25rem] hover:scale-110 transition-transform duration-300 ease-in-out rounded-lg p-8">
      <img
        src={`${CDN_URL}/${cloudinaryImageId}`}
        className="card-img h-56 w-[25rem] rounded-xl object-cover object-center"
      />
      <div className="card-body w-[20rem]">
        <h2 className="restaurent-name">
          <strong>{name}</strong>
        </h2>
        <h3 className="restaurent-cuisine text-neutral-500">
          {cuisines.join(", ")}
        </h3>

        <div className="flex justify-between">
          <div className="flex font-bold">
            <h3 className="restaurent-ratings">⭐{avgRating}🔸</h3>
            <h4 className="delivery-time">{deliverTime} mins</h4>
          </div>

          <h3 className="food-cost">{costForTwo}</h3>
        </div>
      </div>
    </div>
  );
};
