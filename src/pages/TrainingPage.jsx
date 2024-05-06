import Workout from "../components/Workout/Workout";
import {useContext, useState} from "react";
import {ModalsContext, UserContext} from "../App.jsx";
import Title from "../components/Title/Title";
import Button from "../components/Button/Button";

export default function TrainingPage(props) {
  const {changePage} = props;
  const {openModal} = useContext(ModalsContext);
  const [user, setUser] = useContext(UserContext);
  if(!user){
    changePage('HOME');
  }

  return (
    <>
      <Title>Тренировка</Title>
      {user.isWorkout && <Workout user={user} setUser={setUser} changePage={changePage}/>}
      {!user.isWorkout && <Button onClick={() => openModal('create')} >Создать тренировку</Button>}
    </>
  )
}