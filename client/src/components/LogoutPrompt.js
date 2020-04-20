/* 
should accept the following props:

  logout-prompt:String
  onConfirm:Function to be called when the user clicks the Confirm button
  onCancel:Function to be called when the user clicks the Cancel button
*/

import React from "react";
import "./LogoutPrompt.scss"

export default function logoutPrompt(props){

    const logoutPrompt = "Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together."

  return (
    <main  id="login-prompt">
      
      <img src={"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"} id="logout-prompt-pic" />
      
        <section className="login-prompt-pic-container">
            <h3 class="text--regular">{logoutPrompt}</h3>
            <hr class="seperator"/>
            <h4 class="text--regular">Please Log in to Start or Continue your Journey</h4>
        </section>
    </main>
  );
}
