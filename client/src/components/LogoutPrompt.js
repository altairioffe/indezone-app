import React from "react";
import "./LogoutPrompt.scss"

export default function logoutPrompt(props){

    const logoutPrompt = "Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together."

  return (
    <main  id="login-prompt">
      
      <img src="images/logout-image.png" id="logout-prompt-pic" />
      
        <section className="login-prompt-pic-container">
            {/* <h3 class="text--regular">{logoutPrompt}</h3> */}
            <h4 class="text--regular" style={{color:'skyblue',fontWeight:'bold'}}>Please Log in to Continue your Journey</h4>
        </section>
    </main>
  );
}
