import React from "react";
import HamBurgerIcon from "../assets/hamburger.png";
import "./Button.css";

interface RCButtonProps {
  title?: string;
  children?: any;
}

const RCButton = (props: RCButtonProps) => {
  return <button className="rc-button">{props.title}</button>;
};

interface RCButtonSecondaryProps {
  title?: string;
  children?: any;
}

const RCButtonSecondary: React.FunctionComponent<{}> = (
  props: RCButtonSecondaryProps
) => {
  return <button className="rc-button--secondary">{props.children}</button>;
};

const IconButton: React.FunctionComponent<{}> = (props) => {
  return (
    <button>
      <div className="button-icon">
        <img src={HamBurgerIcon} alt="Menu" width="20px" />
      </div>
    </button>
  );
};

export { RCButton, RCButtonSecondary, IconButton };
