import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  let [currentQuestion, setQuestion] = useState(0);
  var thisQuestion = data[currentQuestion].question;
  let [mode, setMode] = useState("not ready");
  return (
    <div>
      <div className="app">Trivia!</div>
      <div className="App">
        <Question
          name={data[currentQuestion].question.text}
          choices={data[currentQuestion].question.choices}
        />
      </div>
      <button onClick={() => setMode(thisQuestion.choices[thisQuestion.correct_choice_index])}>Click for the correct answer</button>
      <div>The correct answer is {mode}</div>
      <div>
        <NextQuestion 
        neededFunction = {
          function nextOne() {
            setQuestion(currentQuestion + 1)
          }
        }
        />
      </div>
    </div>
  );
}
function Answer(props) {
  return <div>{props.name}</div>;
}
function Question(props) {
  return (
    <div>
      <div> {props.name}</div>
      <div>
        {props.choices.map((choice) => {
          return <Answer name={choice} />;
        })}
      </div>
    </div>
  );
}
function NextQuestion(props) {
  return <button onClick={() => {props.neededFunction()}} > Next Question{props.name}</button>;
}

export default App;
