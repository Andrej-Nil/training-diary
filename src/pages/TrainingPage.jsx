import Workout from "../components/Workout/Workout";
import {useContext, useState} from "react";
import {UserContext} from "../App.jsx";
import Title from "../components/Title/Title";
import Button from "../components/Button/Button";
import CreateModal from "../components/CreateModal/CreateModal.jsx";

export default function TrainingPage({changePage}) {
  const [isOpenCreator, setIsOpenCreator] = useState(false);
  const [user, setUser] = useContext(UserContext);
  if(!user){
    changePage('HOME');
  }


  function openCreator() {
    setIsOpenCreator(true)
  }

  function closeCreator() {
    setIsOpenCreator(false)
  }

  return (
    <>
      <Title>Тренировка</Title>
      {user.isWorkout && <Workout user={user}/>}
      {!user.isWorkout && <Button onClick={() => openCreator()} >Создать тренировку</Button>}


      {isOpenCreator
        && <CreateModal
          close={closeCreator} />}
    </>
  )
}