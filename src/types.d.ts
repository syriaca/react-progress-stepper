type Button = {
  color: string,
  label: string,
  isDisabled: boolean,
  onClick?: () => void;
  id?: number;
}

type Stepper = {
  steps: number;
}

type Step = Button;