import React from "react";
import { Field } from "formik";

const Step1 = () => {
  return (
    <div id="step3" className="mt-10 rounded-md shadow-md border-2 p-4">
      <div id="my-radio-group">
        Il tetto è in amianto o ne contiene in parte?
      </div>
      <div
        role="group"
        aria-labelledby="my-radio-group"
        className="flex flex-wrap justify-around mt-10"
      >
        <div className="p-4 border-2 relative cursor-pointer">
          <Field
            type="radio"
            name="amianto"
            value="Si"
            required
            className="opacity-0 cursor-pointer"
          />
          <label
            style={{
              height: "100%",
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              pointerEvents: "none",
              display: "grid",
              placeContent: "center",
            }}
          >
            <p>Si</p>
          </label>
        </div>
        <div className="p-4 border-2 relative cursor-pointer">
          <Field
            type="radio"
            name="amianto"
            value="No"
            required
            className="opacity-0 cursor-pointer"
          />
          <label
            style={{
              height: "100%",
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              pointerEvents: "none",
              display: "grid",
              placeContent: "center",
            }}
          >
            <p>No</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Step1;
