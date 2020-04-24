 /* 
  props:
   username:String
   Level:Integer

*/

import React from "react";
import "./Profile.scss"
import {Container} from '@material-ui/core';

export default function UserBio(props){


  return (
    <aside className="" id="">
      <Container>
       {/* <img id="" src={"https://image.freepik.com/free-photo/woman-smiling-face-with-curly-hair_1139-582.jpg"} alt="profile pic"/> */}
  {/* <img src="images/journaling1.jpg" alt="home-logo"></img> */}
        
    {/*   <hr className="seperator"/> */}
      <section className="prompt__actions card_right">
          <h4 className="">Level: {props.level}</h4>
      </section>
      </Container>
    </aside>
  );
}