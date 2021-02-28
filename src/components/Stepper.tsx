import Step from './Step';

const Stepper = ({steps}: Stepper) => {
    
    let stepList = [];
    
    for(let i = 1; i <= steps; i++) {
        stepList.push(<Step id={i} color="blue" label={`${i}`} isDisabled={i === 1 ? false : true} />)
    }

    return (
        <div className="relative w-96 m-auto">
            <hr className="absolute border-solid border-2 border-gray-200 w-96 m-auto block top-4 z-0" />
            <hr className="absolute border-solid border-2 border-blue-500 w-36 m-auto block top-4 z-0"/>
            <ul className="inline-flex justify-between w-96 mb-4">                
                {stepList}
            </ul>
        </div>
    );
};

export default Stepper;