import React from "react";

function Step1(props) {
  return (
    <div>
      <p className="text-center">
        Hai un tetto di almeno 2.500m2 ad uso non residenziale?
      </p>
      <div className="text-center">
        <label for="si">
          <input
            type="radio"
            name="si"
            value={props.getState("tetto", "si")}
            onChange={props.handleChange}
          />
          Si
        </label>
        <label for="no">
          <input
            type="radio"
            name="no"
            value={props.getState("tetto", "no")}
            onChange={props.handleChange}
          />
          No
        </label>
      </div>
    </div>
  );
}

export default Step1;
