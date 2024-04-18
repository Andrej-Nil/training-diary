import classes from './modal.module.scss';
import Cross from "../Cross/Cross";

export default function Modal({children, darkBg, close, cross}){

  const clsBg = darkBg ? `${classes.modal__bg} ${classes.dark}` : classes.modal__bg;
  return (
    <div className={classes.modal}>
      <div onClick={close} className={clsBg}></div>
      <div className={classes.modal__content}>
        {cross
          ? <span onClick={close} className={classes.modal__close}><Cross /></span>
          : null
        }

        {children}
      </div>
    </div>
  )
}