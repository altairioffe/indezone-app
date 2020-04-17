import React from "react";

export default function Error(props) {
  return (
    <main className="">
      <img
        className=""
        src="images/status.png"
        alt="Keep it up!"
      />
      <h4 className="">{props.message}</h4>
      <button 
       className=""
       onClick={props.onCancel}>
         BACK
     </button>
    </main>
  );
}