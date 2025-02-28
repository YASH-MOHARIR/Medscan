import { ReactElement, useState } from "react";

export const useMultistepForm = (steps: ReactElement[]) => {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    setCurrentStep((prev) => {
      if (currentStep === steps.length - 1) return prev;
      return prev + 1;
    });
  };

  const back = () => {
    setCurrentStep((prev) => {
      if (currentStep <= 0) return prev;
      return prev - 1;
    });
  };

  return {
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
    currentStep,
    next,
    back,
    stepContent: steps[currentStep],
    steps,
  };
};
