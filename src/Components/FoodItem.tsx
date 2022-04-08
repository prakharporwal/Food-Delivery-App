import React from "react";
import { IconButton } from "./Button";
import { ReactComponent as PlusIconSvg } from "../assets/svg/plus-symbol.svg";
import "./FoodItem.css";

export type FoodItemProps = {
  title: string;
  imgSrc: string;
  rating: Number;
  price: Number;
};

const FoodItem: React.FunctionComponent<FoodItemProps> = (props) => {
  return (
    <div className="food-item">
      <img className="food-item-image" src={props.imgSrc} alt={props.title} />

      <span className="food-item-title ">{props.title}</span>
      <span className="food-rating">{props.rating}/5</span>
      <div className="food-price-wrapper">
        <span className="food-price-currency">$</span>
        <span className="food-price">{props.price}</span>
      </div>

      <IconButton alt={"Add To Cart"}>
        <PlusIconSvg />
        {/* </div> */}
      </IconButton>
    </div>
  );
};

export { FoodItem };
