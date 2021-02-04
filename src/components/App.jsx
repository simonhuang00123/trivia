import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  var currentQuestion = 0;
  return <div>
  <div className="app">Trivia!</div>
    <div className="App"> 
        <Question name={data[currentQuestion].question.text} />
    </div>
    <div>
    <Answer name = {data[currentQuestion].question.choices}/>
    </div>
    <div >
    <NextQuestion />
      </div> 
   </div>
}
function Answer(props){
return <div> {props.name}
  </div>
}
function Question(props) {
  return <div>
     <div> {props.name}</div>
  <div>
  </div>
  </div>
}
function NextQuestion(props) {
  return <button> Next Question{props.name}</button>;
}

export default App;
