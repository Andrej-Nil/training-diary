import './btn.scss';
const Btn = (props) => {
    const {text, type, click} = props;
    const cls = ['btn'];
    if(type) cls.push(`btn--${type}`)
    return(
            <span className={cls.join(' ')} onClick={click}>
                {text}
            </span>
        )

}

export default Btn;
