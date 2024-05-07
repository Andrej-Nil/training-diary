import classes from './workout-list.module.scss';
import WorkoutCard from "../WorkoutCard/WorkoutCard";


export default function WorkoutList({list}){

  return(
    <div className={classes['workout-list']}>
      {
        list.map((item) => {
          return <WorkoutCard key={item.id} item={item}/>
        })
      }
    </div>
  )
}