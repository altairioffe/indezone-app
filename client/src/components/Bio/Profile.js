 /* 
  props:
   username:String
   Level:Integer

*/

import React from "react";
import "./Profile.scss"

export default function UserBio(props){


  return (
    <h4 className="">Level: <strong style={{color:"red"}}>{props.level}</strong></h4>
  );
}