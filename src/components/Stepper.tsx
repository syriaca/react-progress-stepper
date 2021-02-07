import Step from './Step';

const Stepper = () => {
    return (
        <div className="relative w-96 m-auto">
            <hr className="absolute border-solid border-2 border-gray-200 w-96 m-auto block top-4 z-0" />
            <hr className="absolute border-solid border-2 border-blue-500 w-36 m-auto block top-4 z-0"/>
            <ul className="inline-flex justify-between w-96 mb-4 ">
                <Step color="blue" label="1" isDisabled={false} />
                <Step color="blue" label="2" isDisabled={true} />
                <Step color="blue" label="3" isDisabled={true} />
                <Step color="blue" label="4" isDisabled={true}/>
            </ul>
        </div>
    );
};

export default Stepper;