import classes from './modal.module.scss';

export default function Modal({children, close}){
  return (
    <div className={classes.modal}>
      <div onClick={close} className={classes.modal__bg}></div>
      <div className={classes.modal__content}>


      {children}
      </div>
    </div>
  )
}