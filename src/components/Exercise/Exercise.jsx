import classes from "./exercise.module.scss";
import ExerciseItem from "../ExerciseItem/ExerciseItem";
import Button from "../Button/Button";

export default function Exercise(props) {
  const {exercise} = props;
  return (
    <div className={classes.exercise}>
      <p className={classes.exercise__title}>{exercise.title}</p>
      <div className={classes.exercise__list}>
        {
          exercise.approachList.map((approach) => <ExerciseItem key={approach.id} approach={approach} />)
        }

      </div>

      <Button onClick={() => {}}>Добавить +</Button>
      {/*<span className={classes['exercise-add']}> </span>*/}

      {/*<input  type="text" placeholder='Название'/>*/}
      {/*<div className={classes.exercise}></div>*/}
    </div>
  )
}