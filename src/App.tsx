import {useState, useEffect} from 'react';
import Button from './components/Button';
import Stepper from './components/Stepper';

const App = () => {

  const [step, setStep] = useState(1);
  const [totalSteps, setTotalStep] = useState(4);
   
  const increment = () => {
    if(step != totalSteps) {
      setStep(prevStep => prevStep + 1);
   }

  }

  const decrement = () => {
    if(step != 1) {
      setStep(prevStep => prevStep - 1);
    }
  }

  return (
    <div className="font-bold text-center">
      <h1 className="m-10 text-2xl">
        React Progress Stepper {step}
      </h1>
      <Stepper steps={totalSteps} currentStep={step} color="blue" />
      <div className="inline-flex justify-around w-56 mt-4">
        <Button color="gray" label="Prev" isDisabled={false} onClick={() => decrement()} />
        <Button color="blue" label="Next" isDisabled={false} onClick={() => increment()} />
      </div>
    </div>
  );
}

export default App;
