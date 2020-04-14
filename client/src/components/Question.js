/* 
should accept the following props:

  question:String eg. "One thing I can get excited about today is..."
  onEdit:Function to be called when the user clicks the Edit button
  onDelete:Function to be called when the user clicks the Delete button
*/

import React from "react";

export default function Show(props){
  return (
    <main className="prompt__card prompt__card--show">
      <section className="prompt__card-left">
      <h2 className="text--regular">{props.question}</h2>
          <h4 className="text--light prompt__actions-button">Answer Question? </h4>
      </section>
        <section className="prompt__actions">
          <img
            className="prompt__actions-button"
            src="images/edit.png"
            alt="Edit"
            onClick={props.onEdit}
          />
          <img
            className="prompt__actions-button"
            src="images/trash.png"
            alt="Delete"
            onClick={props.onDelete}
          />
        </section>
    </main>
  );
}