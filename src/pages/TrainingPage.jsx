import Workout from "../components/Workout/Workout";
import {useContext} from "react";
import {UserContext} from "../App.jsx";
import Title from "../components/Title/Title";
import Button from "../components/Button/Button";

export default function TrainingPage({workout, changePage, openCreator}) {
  const user = useContext(UserContext);
  if(!user){
    changePage('HOME');
  }
  return (
    <>
      <Title>Тренировка</Title>
      {workout && <Workout workout={workout} user={user}/>}
      {!workout && <Button onClick={() => openCreator()} >Создать тренировку</Button>}
    </>
  )
}