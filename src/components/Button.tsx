const Button = ({color, label, isDisabled, onClick}: Button) => {
    return (
        <button
            className={`p-1 rounded-md flex-grow-0 w-24 text-white bg-${color}-400`}
            disabled={isDisabled}
            onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;