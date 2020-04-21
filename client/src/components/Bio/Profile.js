 /* 
  props:
   username:String
   Level:Integer

*/

import React from "react";
import "./Profile.scss"

export default function UserBio(props){


  return (
    <aside className="" id="">
      <section className="prompt__actions card_right">
          <h4 className="">Level: {props.level}</h4>
      </section>
    </aside>
  );
}