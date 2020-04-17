import React from "react";

export default function Error(props) {
  return (
    <main className="">
      <img
        className=""
        src="images/status.png"
        alt="Loading"
      />
      <h4> className="">{props.message}</h4>
      <img
        className="appointment__error-close"
        src="images/close.png"
        alt="Close"
        onClick={props.onClose}
      />
    </main>
  );
}