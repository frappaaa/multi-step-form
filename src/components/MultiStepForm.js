import React from "react";
import { Formik, Form } from "formik";

import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";

const MultiStepForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          tetto: "",
          area: "",
          amianto: "",
          nome: "",
          cognome: "",
          email: "",
          telefono: "",
          privacy: false,
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form className="text-center" autoComplete="on">
            <Step1 />
            <Step2 />
            <Step3 />
            <Step4 />

            <button
              type="submit"
              className="bg-blue-300 py-2 px-7  mt-4 rounded-md uppercase"
            >
              Invia
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultiStepForm;
