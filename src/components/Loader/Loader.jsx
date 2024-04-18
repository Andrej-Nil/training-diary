import Spinner from "../Spinner/Spinner";
import classes from './loader.module.scss';
export default function Loader(){
  return <div className={classes.loader}><Spinner /></div>
}