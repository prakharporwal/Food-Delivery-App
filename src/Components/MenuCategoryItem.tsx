import React from "react";
import { IconButton } from "./Button";
import { ReactComponent as RightArrowIcon } from "../assets/svg/right-arrow.svg";
import "./MenuCategoryItem.css";

interface IProps {
  className?: string;
  title: string;
  iconSrc: string;
}

const MenuCategoryItem: React.FunctionComponent<IProps> = (props) => {
  return (
    <div className={`menu-category-item ${props.className}`}>
      <div className="menu-item-icon-cropper">
        <img className="menu-item-icon" src={props.iconSrc} alt={props.title} />
      </div>
      <span className="menu-item-title">{props.title}</span>
      <div className="menu-item-icon-button-cropper">
        <IconButton alt={"Next"}>
          <div className="menu-next-icon">
            <RightArrowIcon></RightArrowIcon>
          </div>
        </IconButton>
      </div>
    </div>
  );
};

export { MenuCategoryItem };
