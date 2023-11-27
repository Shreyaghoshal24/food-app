import React, { useState } from "react";
import { cards } from "../../restaurants.js";
import Shimmer from "./Shimmer.js";
import "../index.css";
import { RESTURANT_IMAGE_URL } from "../utils/constants.js";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useRestaurantMenu.js";
import ResturantCategory from "./RestaurantCategory.js";

const ResturantMenu = () => {
  const { resId } = useParams();
  const[showIndex, setShowIndex] = useState(null);

  const resMenu = useResturantMenu(resId);

  console.log(resMenu)

  if (resMenu === null) {
    return <Shimmer />;
  }

 // const { name, costForTwoMessage, cuisines } = resMenu?.cards[0]?.card?.card?.filter((name)=>name?.['@type']==='type.googleapis.com/swiggy.presentation.food.v2.Restaurant');
 //console.log(name);
  const categories =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="head">
      <div className="res">
        {categories.map((category, index) => (
          <ResturantCategory data={category.card?.card}  key={category.card?.card?.title} toggle={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)}/>
        ))}
      </div>
    </div>
  );
};

export default ResturantMenu;