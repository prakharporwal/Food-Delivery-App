import React from "react";
import { IconButton } from "./Button";
import { FaPlus } from "react-icons/fa";
import "./FoodItem.css";
import { CartListContext, useCart } from "./CartListContext";
import { CartItem } from "./CheckoutBox";

export type FoodItemProps = {
  title: string;
  imgSrc: string;
  rating: number;
  price: number;
};

const FoodItem: React.FunctionComponent<FoodItemProps> = (props) => {
  let cartContext = useCart();

  function handleOnClick(item: any) {
    //add to the Cart
    console.log("click on add item");
    let cartItem: CartItem = {
      itemName: props.title,
      quantity: 1,
      imgUrl: props.imgSrc,
      price: props.price,
    };
    console.log(cartItem);
    cartContext.addToCart(cartItem);
  }

  return (
    <div className="food-item">
      <img className="food-item-image" src={props.imgSrc} alt={props.title} />

      <span className="food-item-title ">{props.title}</span>
      <span className="food-rating">{props.rating}/5</span>
      <div className="food-price-wrapper">
        <span className="food-price-currency">$</span>
        <span className="food-price">{props.price}</span>
      </div>
      <div className="food-item-icon-button-cropper">
        <IconButton alt={"Add To Cart"} onClick={handleOnClick}>
          <FaPlus />
        </IconButton>
      </div>
    </div>
  );
};

export { FoodItem };
