import './input.scss';

const Input = (props) => {

    const {
        type = 'text', label, name,
        placeholder, value, change, error
    } = props;

    const errorMessage = error ? (<p className="input__error">{error}</p>) : null
    return (
        <div className="input">
            <label className="input__label">{label}</label>
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
