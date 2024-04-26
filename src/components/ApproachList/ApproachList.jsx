import Approach from "../Approach/Approach";
import classes from './approach-list.module.scss';
export default function ApproachList(props){
  const {list, change, isLock} = props;
  return (
    <div className={classes['approach-list']}>
        {list.map((item, idx)=> {
          return <Approach key={idx} idx={idx} change={change} {...item} disabled={isLock} />
        })}
    </div>
  )
}