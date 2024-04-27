import classes from './modal.module.scss';
import Cross from "../Cross/Cross";

export default function Modal({children, darkBg, close, cross}){

  const clsModal = darkBg ? `${classes.modal} ${classes.dark}` : classes.modal;
  return (
    <div className={clsModal}>
      <div onClick={close} className={classes.modal__bg}></div>
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