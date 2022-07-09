import React from "react";
import { IconButton } from "./Button";
import { FaAngleRight } from "react-icons/fa";
import "./MenuCategoryItem.css";

export type MenuCategoryItemProps = {
  className?: string;
  title: string;
  iconSrc: string;
};

const MenuCategoryItem: React.FunctionComponent<MenuCategoryItemProps> = (
  props
) => {
  return (
    <div className={`menu-category-item ${props.className}`}>
      <div className="menu-item-icon-cropper">
        <img className="menu-item-icon" src={props.iconSrc} alt={props.title} />
      </div>
      <span className="menu-item-title">{props.title}</span>
      <div className="menu-item-icon-button-cropper">
        <IconButton alt={"Next"}>
          <FaAngleRight color="black"></FaAngleRight>
        </IconButton>
      </div>
    </div>
  );
};

export { MenuCategoryItem };
