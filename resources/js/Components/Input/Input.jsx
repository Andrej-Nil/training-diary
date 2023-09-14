import './input.scss';

const Input = (props) => {
    const {
        type = 'text', label, name,
        placeholder, value, change, error
    } = props;

    const errorMessage = error ? (<p className="input__error">{error}</p>) : null;
    const labelInput = label ? (<label className="input__label">{label}</label>) : null;
    return (
        <div className="input">
            {labelInput}
            <input
                className="input__control"
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={change}
                value={value}
            />
            {errorMessage}

        </div>
    )
}

export default Input;
