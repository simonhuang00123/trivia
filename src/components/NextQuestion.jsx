import React from "react";
function NextQuestion(props) {
  return <button onClick={() => {props.neededFunction()}} > Next Question{props.name}</button>;
}
export default NextQuestion;