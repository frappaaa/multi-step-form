import React from "react";
import { Field } from "formik";

const Step1 = () => {
  return (
    <div id="step1" className="mt-10 rounded-md shadow-md border-2 p-4">
      <div id="my-radio-group">
        Hai un tetto di almeno 2500m<sup>2</sup> a un uso non residenziale?
      </div>
      <div
        role="group"
        aria-labelledby="my-radio-group"
        className="flex flex-wrap justify-around mt-10"
      >
        <div className="py-2 px-4 rounded-md border-1 relative cursor-pointer">
          <Field
            type="radio"
            name="tetto"
            value="Si"
            required
            className="opacity-0 cursor-pointer"
          />
          <label className="absolute inset-0 h-full pointer-events-none w-full grid place-content-center rounded-md border-2 border-blue-200">
            <p>Si</p>
          </label>
        </div>
        <div className="py-2 px-4 rounded-md border-1 relative cursor-pointer">
          <Field
            type="radio"
            name="tetto"
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
