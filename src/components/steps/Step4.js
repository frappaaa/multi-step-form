import React from "react";
import { Field, ErrorMessage } from "formik";

const Step1 = () => {
  return (
    <div
      id="step4"
      className="mt-10 rounded-md shadow-md border-2 p-4 flex flex-wrap"
    >
      <Field
        type="text"
        name="nome"
        label="nome"
        className="w-full mt-3 shadow appearance-none border rounded py-2 px-3 text-grey-darker"
        placeholder="Nome"
        required
      />
      <Field
        type="text"
        name="cognome"
        label="cognome"
        className="w-full mt-3 shadow appearance-none border rounded py-2 px-3 text-grey-darker"
        placeholder="Cognome"
        required
      />
      <div className="w-full mt-3">
        <Field
          type="email"
          name="email"
          label="email"
          placeholder="Email"
          className="shadow appearance-none border rounded py-2 px-3 text-grey-darker w-full"
          required
        />
        <ErrorMessage name="email" component="div" />
      </div>
      <div className="w-full mt-3">
        <Field
          type="tel"
          name="telefono"
          label="telefono"
          placeholder="Telefono"
          className="shadow appearance-none border rounded py-2 px-3 text-grey-darker w-full"
        />
        <ErrorMessage name="telefono" component="div" />
      </div>
      <div className="flex items-center space-x-2">
        <Field
          type="checkbox"
          name="privacy"
          required
          label={{ label: "Accetta la nostra privacy policy" }}
        />
        <p>
          Accetta la nostra{" "}
          <a href="https://www.prova.com" className="underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Step1;
