import classes from "./exercise.module.scss";
import ExerciseItem from "../ExerciseItem/ExerciseItem";
import ExerciseAdd from "../ExerciseAdd/ExerciseAdd";

export default function Exercise() {
  return (
    <div className={classes.exercise}>
      <p className={classes.exercise__title}>Жим на гризонтальной скамье</p>
      <div className={classes.exercise__list}>
        <ExerciseItem />
        <ExerciseItem />
        <ExerciseItem />
        <ExerciseItem />
        <ExerciseItem />
        <ExerciseItem />
        <ExerciseItem />
        <ExerciseItem />
      </div>
      <ExerciseAdd />

      {/*<input  type="text" placeholder='Название'/>*/}
      {/*<div className={classes.exercise}></div>*/}
    </div>
  )
}