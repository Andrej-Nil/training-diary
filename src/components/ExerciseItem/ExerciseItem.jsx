import classes from "./exercise-item.module.scss";
// import edit from "../../assets/icon/edit.svg";
export default function ExerciseItem({idx, approach, change, blur}) {
const {id, intensity, unit, isEdite} = approach;

  function handleChange(e) {
    change(id, e.target);
  }

  function blurChange(e){
    blur(id, e.target);
  }

  return(
    <div className={classes['exercise-item']}>
      <span className={classes['exercise-item__num']}>{idx + 1}.</span>

      <div className={classes['exercise-item__controls']}>

        <input
          onChange={handleChange}
          onBlur={blurChange}
          className={classes['exercise-item__input']}
          name="intensity"
          value={intensity}
          disabled={isEdite}
          type="text"/>

        <span className={classes['exercise-item__num']}>х</span>

        <input
          onChange={handleChange}
          onBlur={blurChange}
          className={classes['exercise-item__input']}
          name="unit"
          value={unit}
          disabled={isEdite}
          type="text"/>

      </div>


    </div>
  )
}