import classes from './approach.module.scss'

export default function Approach(props) {
  const {disabled, change, weight, count, idx } = props;
  function handleChange(e){
    change(e.target, idx)
  }
  return(
    <div className={classes.approach}>
      <input disabled={disabled} onChange={props.change} name="weight" className={classes.approach__input} type="text" value={weight}/>
      /
   {/*<div className={classes.approach__line}></div>*/}
      <input disabled={disabled} onChange={props.change} name="count" className={classes.approach__input} type="text" value={count}/>
    </div>
  )
}
