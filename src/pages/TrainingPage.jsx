import Workout from "../components/Workout/Workout";
import {useContext} from "react";
import {ModalsContext, UserContext} from "../App.jsx";
import Title from "../components/Title/Title";
import Button from "../components/Button/Button";
import {Navigate} from "react-router-dom";

export default function TrainingPage() {
  const {openModal} = useContext(ModalsContext);
  const {user, setUser} = useContext(UserContext);
if(!user){
  return <Navigate to={'/'}/>
}
  return (
    <>
      <Title>Тренировка</Title>
      {user.isWorkout && <Workout user={user} setUser={setUser}/>}
      {!user.isWorkout && <Button onClick={() => openModal('create')} >Создать тренировку</Button>}
    </>
  )
}