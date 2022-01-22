import React, { ButtonHTMLAttributes, FC } from "react";

import classes from "./Button.module.css";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  console.log("Button RUNNING");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
export default React.memo(Button);
