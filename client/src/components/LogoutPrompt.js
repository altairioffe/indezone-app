import React from "react";
import "./LogoutPrompt.scss"

export default function logoutPrompt(props){

    const logoutPrompt = "Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together."
  
  return (
    <main  id="login-prompt">
      
      <h4 style={{color:'skyblue',fontWeight:'bold'}}>Please Log in to Continue your Journey</h4>
      <img src="images/logout-image2.png" id="logout-prompt-pic" />
      
    </main>
  );
}
