import classes from './message.module.scss';
import Button from "../Button/Button";

export default function Message({message, close}) {
  return(
    <div className={classes.message}>
      <div className={classes.message__text}>
        {message}
      </div>


      {close &&
        <div className={classes.message__btn}>
         <Button onClick={() => close()}>OK</Button>
        </div>
      }

    </div>
  )
}