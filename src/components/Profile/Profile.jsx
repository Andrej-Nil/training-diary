import classes from './profile.module.scss'
import Button from "../Button/Button";

export default function Profile({user}) {


  return (
    <div>
      <p >{user.name}</p>
      <Button>Выйти</Button>
      <Button>Удалить учетную запись</Button>
    </div>
  )
}