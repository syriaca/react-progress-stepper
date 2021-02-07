const Button = ({color, label, isDisabled}: Button) => {
    return (
        <button className={`p-2 bg-${color}-400`} disabled={isDisabled}>
            {label}
        </button>
    );
};

export default Button;