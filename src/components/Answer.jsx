import React from "react";
function Answer(props) {
  return <div onClick={props.clicked}>{props.name}</div>;
}
export default Answer;