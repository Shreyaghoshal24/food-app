import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useResturantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchRestaurants();
    // cards ? fetchRestaurants() : console.log("Error found");
  }, []);

  const fetchRestaurants = async () => {
    const resturants = await fetch(MENU_URL + resId);

    const json = await resturants.json();
    console.log(json);
    setResInfo(json.data);
    // setResInfo(cards);
  };

  return resInfo;
};

export default useResturantMenu;