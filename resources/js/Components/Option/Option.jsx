import './option.scss';

const Option = (props) => {
    const {click, id, title, active} = props;
    const clsDote = ['option__dot'];
    if(active) clsDote.push('active');
    const clickHandler = () => {
        click(id);
    }
    return (
        <div onClick={clickHandler} className="option">
            <span className="option__title"> {title} </span>
           <span className={clsDote.join(' ')}></span>
        </div>
    )
}

export default Option;
