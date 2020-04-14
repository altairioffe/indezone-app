/* 
takes in the following props:

    id:number - the id of the user
    name:string - the name of the user
    avatar:url - a url to an image of the user
    selected:boolean - to determine if an user is selected or not
    setUser:function - sets the user upon selection

  and returns a selectable user portrait

*/

import React from "react";
import classnames from "classnames";
import "components/UserListItem.scss";

export default function UserListItem(props) {

  const UserClass = "users__item " + classnames({
    "users__item--selected": props.selected
  });

  return (
    <li className={UserClass} onClick={props.setUser}>
      <img
        className="users__item-image"
        src={props.avatar}
        alt={props.handle} />
      {props.selected && props.handle} 
    </li>
  );
}