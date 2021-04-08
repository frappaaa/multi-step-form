import { Steps, Step } from "react-step-builder";
import Step1 from "./stepForm/Step1";
import Step2 from "./stepForm/Step2";
import Step3 from "./stepForm/Step3";
import Navigation from "./Navigation";

function Form() {
  const config = {
    navigation: {
      component: Navigation, // a React component with special props provided automatically
      location: "after", // or before
    },
  };
  return (
    <div>
      <Steps config={config}>
        <Step component={Step1} />
        <Step component={Step2} />
        <Step component={Step3} />
      </Steps>
    </div>
  );
}

export default Form;
