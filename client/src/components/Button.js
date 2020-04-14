import React from "react";
import classnames from "classnames";
import "./Button.scss";

export default function Button(props) {
  const buttonClass = classnames("button", {
    "button--confirm": props.confirm,
    "button--danger": props.danger,
    "button--warning": props.warning
  });
 
   return (
    <button 
      className={buttonClass}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}