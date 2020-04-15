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
      <div id="">
        <img id="" src={""} />
      </div>
      <hr className=""/>
      <section className="">
          <h4 className="">{props.username}</h4>
          <h4 className="">{props.level}</h4>
          <button 
            className="" o
            nClick={props.onClick}
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