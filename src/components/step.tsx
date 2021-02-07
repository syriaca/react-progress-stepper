const Step = ({color, label, isDisabled}: Step) => {
    return (
        <button className={`p-2 bg-${color}-400`} disabled={isDisabled}>
            {label}
        </button>
    );
};

export default Step;