import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Map from "./Map";

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
          <Form className="text-center" autoComplete="off">
            <div id="step1" className="mt-10 rounded-md shadow-md border-2 p-4">
              <div id="my-radio-group">
                Hai un tetto di almeno 2500m<sup>2</sup> a un uso non
                residenziale?
              </div>
              <div role="group" aria-labelledby="my-radio-group">
                <label>
                  <Field type="radio" name="tetto" value="Si" required />
                  Si
                </label>
                <label>
                  <Field type="radio" name="tetto" value="No" required />
                  No
                </label>
              </div>
            </div>
            <div id="step2" className="mt-10 rounded-md shadow-md border-2">
              <Map />
            </div>
            <div id="step3" className="mt-10 rounded-md shadow-md border-2 p-4">
              <div id="my-radio-group">
                Il tetto è in amianto o ne contiene in parte?
              </div>
              <div role="group" aria-labelledby="my-radio-group">
                <label>
                  <Field type="radio" name="amianto" value="Si" required />
                  Si
                </label>
                <label>
                  <Field type="radio" name="amianto" value="No" required />
                  No
                </label>
              </div>
            </div>
            <div
              id="step4"
              className="mt-10 rounded-md shadow-md border-2 p-4 flex flex-wrap"
            >
              <Field
                type="text"
                name="nome"
                label="nome"
                className="w-full"
                placeholder="Nome"
                required
              />
              <Field
                type="text"
                name="cognome"
                label="cognome"
                className="w-full"
                placeholder="Cognome"
                required
              />
              <div className="w-full">
                <Field
                  type="email"
                  name="email"
                  label="email"
                  placeholder="Email"
                  required
                />
                <ErrorMessage name="email" component="div" />
              </div>
              <div className="w-full">
                <Field
                  type="tel"
                  name="telefono"
                  label="telefono"
                  placeholder="Telefono"
                />
                <ErrorMessage name="telefono" component="div" />
              </div>
              <div className="flex items-center space-x-2">
                <p>
                  Accetta la nostra{" "}
                  <a href="https://www.prova.com" className="underline">
                    Privacy Policy
                  </a>
                </p>
                <Field
                  type="checkbox"
                  name="privacy"
                  required
                  label={{ label: "Accetta la nostra privacy policy" }}
                />
              </div>
            </div>

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
