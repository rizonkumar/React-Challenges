import { useEffect, useRef, useState } from "react";

const Stepper = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1); // by default 1st
  const [isComplete, setIsComplelte] = useState(false);
  const stepRef = useRef([]);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  console.log(stepRef);
  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginLeft: stepRef.current[stepsConfig.length - 1].offsetWidth / 2,
    });
    console.log(stepRef.current[0].offsetWidth); // 126
    console.log(stepRef.current[stepsConfig.length - 1].offsetWidth); // 84
  }, [stepRef.current]);

  if (!stepsConfig.length) {
    return <></>;
  }

  const handleNext = () => {
    setCurrentStep((prevState) => {
      if (prevState === stepsConfig.length) {
        setIsComplelte(true);
        return prevState;
      } else {
        return prevState + 1;
      }
    });
  };

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
  };

  const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

  return (
    <>
      <div className="stepper">
        {stepsConfig.map((step, index) => {
          return (
            <div
              key={step.name}
              ref={(el) => (stepRef.current[index] = el)}
              className={`step ${
                currentStep > index + 1 || isComplete ? "complete" : ""
              } ${currentStep === index + 1 ? "active" : ""}`}
            >
              <div className="step-number">
                {currentStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className="step-name">{step.name}</div>
            </div>
          );
        })}

        <div
          className="progress-bar"
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
          <div
            className="progress"
            style={{ width: `${calculateProgressBarWidth()}%` }}
          ></div>
        </div>
      </div>

      <ActiveComponent />

      {!isComplete && (
        <button className="btn" onClick={handleNext}>
          {currentStep === stepsConfig.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
};

export default Stepper;
