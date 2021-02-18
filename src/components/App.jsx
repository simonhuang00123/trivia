import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  var currentQuestion = 0;
  return (
    <div>
      <div className="app">Trivia!</div>
      <div className="App">
        <Question
          name={data[currentQuestion].question.text}
          choices={data[currentQuestion].question.choices}
        />
      </div>

      <div>
        <NextQuestion />
      </div>
    </div>
  );
}
function Answer(props) {
  return <div>{props.name}</div>;
}

let x = [1, 2, 3, 4];
console.log(
  x.map((element) => {
    return element * 2;
  })
);

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
  return <button> Next Question{props.name}</button>;
}

export default App;
