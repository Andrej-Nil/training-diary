import './select.scss';
import icon from '../../../image/icons/arrow-down.svg'

const Select = () => {
    return (
        <div className="select">
            <span className="select__label">Вид</span>
            <div className="select__top">
                <span className="select__title">Тренировка в зале</span>
                <img src={icon} alt="" className="select__arrow"/>
            </div>



        </div>
    )
}
export default Select;
