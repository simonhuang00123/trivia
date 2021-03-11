import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";
import NextQuestion from "../components/NextQuestion";
import Question from "../components/Question";
function App() {
  let [currentQuestion, setQuestion] = useState(0);
  var thisQuestion = data[currentQuestion].question;
  let [isAnswered, setMode] = useState("not ready");
  function display() {
  if (isAnswered == thisQuestion.choices[thisQuestion.correct_choice_index]) {
    return <div> Correct! You answered {isAnswered} , which is the correct answer!</div>
  }
  else if (isAnswered == "not ready") {
    return 
  }
  else {
    return <div> Wrong! You answered {isAnswered} , the correct answer was {thisQuestion.choices[thisQuestion.correct_choice_index]} </div>
  }
  }
  return (
    <div>
      <div className="app">Trivia!</div>
      <div className="App">
        <Question
          name={data[currentQuestion].question.text}
          choices={data[currentQuestion].question.choices}
          clicked={(choice) => {
            setMode(choice)
          }}
        />
      </div>
      <button onClick={() => setMode(thisQuestion.choices[thisQuestion.correct_choice_index])}>Click for the correct answer</button>
      {display()}
      <div>
        <NextQuestion 
        neededFunction = {
          function nextOne() {
            if (currentQuestion > 0) {
              return
            }
            setQuestion(currentQuestion + 1)
            setMode("not ready")
          }
        }
        />
      </div>
    </div>
  );
}

export default App;
