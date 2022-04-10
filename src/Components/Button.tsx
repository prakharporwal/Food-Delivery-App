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
  children: any;
}

const RCSecondaryButton: React.FunctionComponent<RCSecondaryButtonProps> = (
  props
) => {
  return <button className="rc-button--secondary">{props.children}</button>;
};

interface IconButtonProps {
  alt?: string;
}

const IconButton: React.FunctionComponent<IconButtonProps> = (props) => {
  return (
    <button className="icon-button">
      <div className="button-icon-div">
        {props.children === null ? props.alt : props.children}
      </div>
    </button>
  );
};

export { RCButton, RCSecondaryButton, IconButton };
