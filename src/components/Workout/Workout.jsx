import classes from './workout.module.scss'
import WorkoutRow from "../WorkoutRow/WorkoutRow";
import Add from "../Add/Add";
import Exercise from "../Exercise/Exercise";


export default function Workout({workout}) {

  // function handleChange(input, id) {
  //   console.log(input, id);
  // }
  //
  // function handleApproachChange(id, input, idx) {
  //   console.log(id, input, idx);
  // }
  //
  // function add() {
  //
  // }

  return (
    <div className={classes.workout}>
      <div className={classes.workout__top}>
        <h2 className={classes.workout__title}>{workout.title}</h2>
        <p className={classes.workout__date}>{workout.date}</p>
      </div>
      <p className={classes.workout__desc}>{workout.description}</p>

      <div className={classes.workout__list}>
        <Exercise />
        <Add />
        {/*{actions.map((item)=>{*/}
        {/*  return <WorkoutRow key={item.id} changeApproach={handleApproachChange} handleChange={handleChange} {...item}/>*/}
        {/*})}*/}
      </div>


    </div>
  )
}