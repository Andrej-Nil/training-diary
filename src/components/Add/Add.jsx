import classes from './add.module.scss';
import plus from '../../assets/icon/plus.svg';
export default function Add(){
  return(
    <div className={classes.add}>

      <div className={classes.add__plus}>
        <img className={classes.add__icon} src={plus} alt=""/>
      </div>
      <p className={classes.add__title}>Добавить упражнение</p>
    </div>
  )
}