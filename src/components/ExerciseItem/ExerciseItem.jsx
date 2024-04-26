import classes from "./exercise-item.module.scss";
import edit from "../../assets/icon/edit.svg";
import check from '../../assets/icon/check.svg';
export default function ExerciseItem() {
  return(
    <div className={classes['exercise-item']}>
      <span className={classes['exercise-item__num']}>1.</span>

      <div className={classes['exercise-item__controls']}>

        <input className={classes['exercise-item__input']} type="text" disabled />
        <span className={classes['exercise-item__num']}>х</span>
        <input className={classes['exercise-item__input']} type="text" />


      </div>
      {/*<span className={classes['exercise-item__btn']}>*/}
      {/*  <img src={check} className={classes['exercise-item__icon']}/>*/}
      {/*</span>*/}

      <span className={classes['exercise-item__btn']}>
        <img src={edit} className={classes['exercise-item__btn']}/>
      </span>


    </div>
  )
}