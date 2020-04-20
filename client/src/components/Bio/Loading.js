import React from "react";

export default function Status(props) {
  return (
    <main className="">
      <img
        className=""
        src="images/loading-resize.gif"
        alt="Loading"
      />
      <h1 className="">{props.message}</h1>
    </main>
  );
}