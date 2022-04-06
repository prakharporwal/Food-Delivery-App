import React from "react";
import "./Button.css";

interface RCButtonProps {
  title?: string;
  children: any;
}

const RCButton = (props: RCButtonProps) => {
  return <button className="rc-button">{props.children}</button>;
};

export { RCButton };
