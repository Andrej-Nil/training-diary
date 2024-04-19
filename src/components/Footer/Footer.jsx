import classes from './footer.module.scss'
import Copyright from "../Copyright/Copyright";

export default function Footer(){
return (
  <footer className={classes.footer}>
    <div className="container">
      <div className={classes['footer__inner']}>

            <Copyright />
        </div>

      </div>
  </footer>
)
}