import React from 'react';
// Import the react-swipe-to-delete-component
import SwipeToDelete from 'react-swipe-to-delete-component';
 
export default function Swipe(){
const data = [
  {id: 1, text: 'End of summer reading list', date: '1.03.2016'},
  {id: 2, text: 'Somewhere in the middle 📸', date: '23.01.2017'},
  {id: 3, text: 'Good morning to 9M of you?!?! ❤️🙏🏻Feeling very grateful and giddy.', date: '12.01.2019'}
];
 
const list = data.map(item => (
  <SwipeToDelete key={item.id} item={item}>
  
      <h4 className="list-group-item-heading">{item.date}</h4>
      <p className="list-group-item-text">{item.text}</p>
    
  </SwipeToDelete>
));
 
return (
  <div className="list-group">
    {list}
  </div>
);
 
};
