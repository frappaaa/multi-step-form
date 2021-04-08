import React from "react";

function Step1(props) {
  return (
    <div>
      <p>
        Hai un tetto di almeno 2.500m2 ad uso non residenziale?
        <input
          type="radio"
          name="tetto"
          value={props.getState("tetto", "")}
          onChange={props.handleChange}
        />
        <label for="tetto">Si</label>
      </p>
    </div>
  );
}

export default Step1;
