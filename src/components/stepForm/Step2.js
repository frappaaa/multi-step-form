import React from "react";

function Step2(props) {
  return (
    <div>
      <p>
        Email:{" "}
        <input
          name="email"
          value={props.getState("email", "")}
          onChange={props.handleChange}
        />
      </p>
      <p>
        Phone:{" "}
        <input
          name="phone"
          value={props.getState("phone", "")}
          onChange={props.handleChange}
        />
      </p>
    </div>
  );
}

export default Step2;
