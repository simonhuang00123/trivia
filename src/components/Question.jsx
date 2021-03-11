import React from "react";
import Answer from "../components/Answer";
function Question(props) {
  return (
    <div>
      <div> {props.name}</div>
      <div>
        {props.choices.map((choice) => {
          return <Answer clicked={() =>{props.clicked(choice)}} name={choice} key={choice}/>;
        })}
      </div>
    </div>
  );
}
export default Question; 