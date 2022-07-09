import React from "react";
import "./Button.css";

interface RCButtonProps {
  title?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const RCButton: React.FunctionComponent<RCButtonProps> = (props) => {
  return (
    <button
      title={props.title}
      className={`rc-button ${props.className}`}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

interface RCSecondaryButtonProps {
  title?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: any;
}

const RCSecondaryButton: React.FunctionComponent<RCSecondaryButtonProps> = (
  props
) => {
  return (
    <button
      className={`rc-button--secondary ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

interface IconButtonProps {
  alt?: string;
  onClick?: any;
}

const IconButton: React.FunctionComponent<IconButtonProps> = (props) => {
  return (
    <button className="icon-button" onClick={props.onClick}>
      {props.children === null ? props.alt : props.children}
    </button>
  );
};

export { RCButton, RCSecondaryButton, IconButton };
