import React from "react";
import "../styles/Input.css";

const Input = props => {
  const { change, city, submit } = props;
  return (
    <div className="input">
      <form action="">
        <label>
          <input
            type="text"
            onChange={change}
            value={city}
            placeholder={"Enter city..."}
          />
          <button onClick={submit}>Check</button>
        </label>
      </form>
    </div>
  );
};

export default Input;
