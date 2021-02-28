import {useState, useEffect} from 'react';
import Button from './components/Button';
import Stepper from './components/Stepper';

const App = () => {

  const [step, setStep] = useState(1);
  const [totalSteps, setTotalStep] = useState(4);
   
  const increment = () => {
    setStep(prevStep => prevStep + 1);
    console.log(step);
  }

  const decrement = () => {
    setStep(prevStep => prevStep - 1);
    console.log(step);
  }

  return (
    <div className="font-bold text-center">
      <h1 className="m-10 text-2xl">
        React Progress Stepper
      </h1>
      <Stepper steps={totalSteps} />
      <div className="inline-flex justify-around w-56 mt-4">
        <Button color="gray" label="Prev" isDisabled={true} onClick={() => decrement()} />
        <Button color="blue" label="Next" isDisabled={false} onClick={() => increment()} />
      </div>
    </div>
  );
}

export default App;
