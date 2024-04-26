import classes from './workout-row.module.scss';
import Approach from "../Approach/Approach.jsx";
import ApproachList from "../ApproachList/ApproachList";

export default function WorkoutRow(props){

  const {handleChange, сhangeApproach, id, isLock, approach, comment, name} = props;
  function change(e){
    handleChange(e.target, id)
  }

  function handleChangeApproach( input, idx) {
    сhangeApproach(id, input, idx);
  }

  return(
    <div className={classes['workout-row']}>

      <div className={classes['workout-row__main']}>



        {/*<input disabled={isLock} onChange={change} type="text" name='name' className={classes['workout-row__input']} value={name}/>*/}

        {/*<ApproachList list={approach} change={handleChangeApproach} isLock={isLock}/>*/}

        {/*<input disabled={isLock} onChange={change} type="text" name='comment' className={classes['workout-row__input']} value={comment}/>*/}

      </div>

      <div className={classes['workout-row__control']}>

      </div>
    </div>
  )
}