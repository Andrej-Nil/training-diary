import './button.scss';

const Button = (props) => {
    const {type, children} = props;
    return (
        <button className="button" type={type}>
            {children}
        </button>
    )
}
export default Button;
