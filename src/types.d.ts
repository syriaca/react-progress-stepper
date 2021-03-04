type Button = {
  color: string,
  label: string,
  isDisabled: boolean,
  onClick?: () => void;
}

type Stepper = {
  steps: number;
  currentStep: number;
  color: string;
}

type Step = {
  color: string,
  label: string,
  isDisabled: boolean,
  currentStep: number,
  onClick?: () => void;
  id: number;
};