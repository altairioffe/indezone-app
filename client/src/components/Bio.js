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
        <img id="" src={"https://image.freepik.com/free-photo/woman-smiling-face-with-curly-hair_1139-582.jpg"} alt="profile pic"/>
      </div>
      <hr className="seperator"/>
      <section className="prompt__actions card_right">
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