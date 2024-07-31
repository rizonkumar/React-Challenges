import { useState } from "react";
import "./Stepper.css";

const Stepper = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  console.log(currentStep, "Current Step");

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="stepper">
      <div className="step-indicators">
        {steps.map(({ label }, index) => (
          <div key={index} className="step-container">
            <div className={`step-number ${index <= currentStep ? "active" : ""}`}>
              {index + 1}
            </div>
            <div className="step-label">{label}</div>
            {index < steps.length - 1 && <div className="step-line"></div>}
          </div>
        ))}
      </div>
      <div className="stepper-content">
        {steps[currentStep].content}
        <div className="stepper-controls">
          <button onClick={handleBack} disabled={currentStep === 0}>Back</button>
          <button onClick={handleNext} disabled={currentStep === steps.length - 1}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
