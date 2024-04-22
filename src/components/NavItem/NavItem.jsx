import classes from './nav-item.module.scss';

export default function NavItem(props){
  const {children, onClick, active} = props;

  const cls = active ? `${classes['nav-item']} ${classes['active']}` : `${classes['nav-item']}`;
  return <span className={cls} onClick={onClick}>{children}</span>
}