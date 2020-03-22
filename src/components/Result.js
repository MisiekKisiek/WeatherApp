import React from "react";
import CoolResult from "./CoolResult";
import NegativeResult from "./NegativeResult.js";

const Result = props => {
  return (
    <div className="result">
      {props.conditions.city ? (
        props.err ? (
          <NegativeResult />
        ) : (
          <CoolResult conditions={props.conditions} />
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default Result;
