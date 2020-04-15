 /* 
should accept the following props:

  bio:String
  username:String
  Level:Integer
  onConfirm:Function to be called when the user clicks the Confirm button
  onCancel:Function to be called when the user clicks the Cancel button
*/

import React from "react";
//import "./Bio.scss"

export default function Bio(props){
  return (
    <main className="prompt__card prompt__card--create" id="bio">
      
      <img src={"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"} id="biopic" />
      
        <section className="prompt__actions card_right">
            <h3 className="text--regular">{props.bio}</h3>
            <hr className="seperator"/>
            <h4 className="text--regular">{props.username}</h4>
            <h4 className="text--regular">{props.level}</h4>
        </section>
    </main>
  );
}