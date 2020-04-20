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
      <div id="">
        <img id="" src={"https://image.freepik.com/free-photo/woman-smiling-face-with-curly-hair_1139-582.jpg"} alt="profile pic"/>
      </div>
      <hr className="seperator"/>
      <section className="prompt__actions card_right">
          <h4 className="">Level: {props.level}</h4>
      </section>
    </aside>
  );
}