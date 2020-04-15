 /* 
should accept the following props:

  bio:String
  username:String
  Level:Integer

*/

import React from "react";
//import "./Bio.scss"

export default function Bio(props){
  return (
    <main className="" id="">
      <div id="biopic-container">
      <img src={"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"} id="" />
      </div>
      <hr className=""/>
      <section className="">
          <h4 className="">{props.username}</h4>
          <h4 className="">{props.level}</h4>
      </section>
      <section>
        <p>{props.bio}</p>
      </section>
    </main>
  );
}