import React, { Component } from 'react';
import logo from './logo.svg';
import Bio from './components/Bio';
import './App.css';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Navbar</h1>
       
        <div>
          <Bio 
            username={"Linda"}
            level={1}
            onClick={()=>alert(("clicked!"))}
            bio={"Hi I love this app"}
            />
        </div>

        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default App;


// import Bio from './components/Bio';
// import QuestionList from "./components/QuestionList";
// import Question from "./components/QuestionAnswer/Question";
// import Index from "./components/QuestionAnswer/Index";
// import "./App.css";


// const questionsArr = [
//   "Someone who needs me on my A-game today is...",
//   "A situation that might stress me out or trip me up today could be...",
//   "If I was a high performance coach looking at my life from a high level, I would tell myself to remember that ... ... and the way that my best self would deal with that is... ",
//   "The big progects I have to keep in mind that I want to take on, even if I can't act toward them today, are...",
//   "The big projects I have to keep in mind that I want to take on, even if I can't act toward them today, are...",
//   "I would know that today was a great success if at the end of the day I did, or felt this..."
// ];

// const bio = "Everybody has the power to remodel their behaviour, habits, and attitudes, but not everybody knows how. Our app will make it simple and rewarding for anybody to get the benefits of reflective journaling. Our app will bring people together through personal goals, challenges, and insights, so that we can realize our potential together."

// const questionsList = 
//   questionsArr.map( (question, i) => {
//     return(
//       <Question
//         key={i} 
//         question={question}
//         type={''}
//         onEdit={()=>{}}
//         onDelete={()=>{}}
//       />
//     )
//   })