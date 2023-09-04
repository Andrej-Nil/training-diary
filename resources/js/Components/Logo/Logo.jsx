import './logo.scss';
import icon from '../../../image/logo.svg';

const Logo = () => {
    return (
        <div className='logo'>
            <img className="logo__icon" src={icon} alt=""/>
            <p className="logo__title">
                <span className="logo__word">Дневник</span>
                <span className="logo__word">Тренировок</span>
            </p>
        </div>
    )
}

export default Logo;
