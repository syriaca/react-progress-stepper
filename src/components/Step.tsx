const Step = ({color, label, isDisabled, id, currentStep}: Step) => {
    return (
        <button
            key={id}
            className={`rounded-full bg-white h-10 w-10 border-solid border-4 border-${currentStep < id  ? `gray-200` : `${color}-500`} z-10`}
            disabled={isDisabled}>
            {label}
        </button>
    );
};

export default Step;