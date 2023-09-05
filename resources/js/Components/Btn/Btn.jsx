import './btn.scss';
const Btn = (props) => {
    const {text, click} = props;
    return(
            <span className="btn" onClick={click}>{text}</span>
        )

}

export default Btn;
