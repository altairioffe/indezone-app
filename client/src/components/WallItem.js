import React from 'react';
import ReactDOM from 'react-dom';
export default function WallItem(props){
  return (
      <div>
      <p>{props.createdAt}</p>
      <p>{props.question}</p>
      <p>{props.answer}</p>
      </div>
    );
    
}