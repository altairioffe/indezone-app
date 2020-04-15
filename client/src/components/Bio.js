 /* 
  props:
   bio:String
   username:String
   Level:Integer
*/

import React from "react";
import "./Bio.scss"

export default function Bio(props){
  return (
    <main className="" id="">
      <div id="biopic-container">
        <img id="biopic" src={"https://files.slack.com/files-pri/T2G8TE2E5-F012J2N13NC/image.png"} />
      </div>
      <hr className=""/>
      <section className="">
          <h4 className="">{props.username}</h4>
          <h4 className="">Level: {props.level}</h4>
          <button 
            className=""
            onClick={props.onClick}
            disabled={props.disabled}>
              GET INSIGHTS
          </button>
      </section>
      <article className="">
        <p>{props.bio}</p>
      </article>
    </main>
  );
}