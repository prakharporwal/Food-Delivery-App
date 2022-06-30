import React from "react";
import { FoodItem, FoodItemProps } from "./FoodItem";
import "./FoodItemList.css";

interface IProps {
  foodData: FoodItemProps[];
}

const FoodItemList: React.FunctionComponent<IProps> = (props) => {
  return (
    <div className="food-item-list">
      {props.foodData.map((foodItem: FoodItemProps) => {
        return <FoodItem {...foodItem}></FoodItem>;
      })}
    </div>
  );
};

export { FoodItemList };
