import Button from './components/button';

const App = () => {
  return (
    <div className="font-bold text-center">
      <h1>
        React Progress Stepper
      </h1>
        <div className="inline-flex justify-around w-56 mt-4">
          <Button color="gray" label="Prev" isDisabled={true} onClick={() => console.log()} />
          <Button color="blue" label="Next" isDisabled={false} onClick={() => console.log()} />
        </div>
    </div>
  );
}

export default App;
