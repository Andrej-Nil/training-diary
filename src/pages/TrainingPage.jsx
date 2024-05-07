import Workout from "../components/Workout/Workout";
import {useContext, useState} from "react";
import {ModalsContext, PageContext, UserContext} from "../App.jsx";
import Title from "../components/Title/Title";
import Button from "../components/Button/Button";

export default function TrainingPage() {
  const {setPage} = useContext(PageContext)
  const {openModal} = useContext(ModalsContext);
  const {user, setUser} = useContext(UserContext);
  if(!user){
    setPage('HOME');
  }

  return (
    <>
      <Title>Тренировка</Title>
      {user.isWorkout && <Workout user={user} setUser={setUser} changePage={setPage}/>}
      {!user.isWorkout && <Button onClick={() => openModal('create')} >Создать тренировку</Button>}
    </>
  )
}