import classes from './nav-item.module.scss';

export default function NavItem(props){
  const {children, onClick, id} = props;
  return <span className={classes['nav-item']} onClick={onClick}>{children}</span>
}