import './input.scss';

const Input = (props) => {

const {type = 'text'} = props
    return (
        <div className="input">
            <label className="input__label">Почта</label>
            <input type={type} className="input__control"/>
        </div>
    )
}

export default Input;
