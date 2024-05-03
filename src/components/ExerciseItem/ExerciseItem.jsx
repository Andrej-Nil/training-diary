import classes from "./exercise-item.module.scss";
import edit from "../../assets/icon/edit.svg";
export default function ExerciseItem({idx, approach, change}) {
const {id, intensity, unit, isEdite} = approach;

  function handleChange(e) {
    change(id, e.target);
  }

  return(
    <div className={classes['exercise-item']}>
      <span className={classes['exercise-item__num']}>{idx + 1}.</span>

      <div className={classes['exercise-item__controls']}>

        <input
          onChange={handleChange}
          className={classes['exercise-item__input']}
          name="intensity"
          value={intensity}
          disabled={isEdite}
          type="text"/>

        <span className={classes['exercise-item__num']}>х</span>

        <input
          onChange={handleChange}
          className={classes['exercise-item__input']}
          name="unit"
          value={unit}
          disabled={isEdite}
          type="text"/>

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