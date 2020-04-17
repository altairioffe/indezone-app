import "./QuestionAnswer/styles.scss";

import React from "react"
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function Navbar(props) {

  return (
    <header>
      <a href="/">
        <img src="images/indezone.png" alt="INDEZONE" />
        <i class="fas fa-globe" aria-hidden="true"></i>Journaling
      </a>

      <div>
        <a>Find Journey</a>
        <a>Find Others</a>
        <a>View Badges</a>
      </div>

      <b>Enter Email:</b>
      <Button variant="fob">logout</Button>
      <ButtonGroup color="primary" variant="mini" size="large">
        <Button onClick={"cancel"}>register</Button>
        <Button onClick={() => console.log()}>login</Button>
        <Button onClick={() => console.log()}>logout</Button>
      </ButtonGroup>
    </header>
  );
}