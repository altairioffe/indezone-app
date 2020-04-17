/* 
should accept the following props:

  bio:String
  onConfirm:Function to be called when the user clicks the Confirm button
  onCancel:Function to be called when the user clicks the Cancel button
*/

import React from "react";
import "./Bio.scss"

export default function Bio(props){
  return (
    <main  id="bio">
      
      <img src={"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"} id="biopic" />
      
        <section className="prompt__actions card_right">
            <h3 class="text--regular">{props.bio}</h3>
            <hr class="seperator"/>
            <h4 class="text--regular">{"@username"}</h4>
        </section>
    </main>
  );
}
