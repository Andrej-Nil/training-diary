import classes from './workout-card.module.scss';
import Button from "../Button/Button.jsx";

export default function WorkoutCard({item}){
  const {id, title, date, description} = item;
  return (
    <div className={classes['workout-card']}>
      <div className={classes['workout-card__top']}>
        <p className={classes['workout-card__title']}>{title}</p>
        <p className={classes['workout-card__date']}>{date}</p>
      </div>
      <p className={classes['workout-card__description']}>{description}</p>
      <Button onClick={() => {}}>Подробнее</Button>
    </div>
  )
}