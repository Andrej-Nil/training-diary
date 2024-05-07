import Title from "../components/Title/Title";
import WorkoutList from "../components/WorkoutList/WorkoutList";
import useService from "../hooks/useService.js";
import {useContext, useEffect, useState} from "react";
import {ModalsContext, PageContext, UserContext} from "../App.jsx";
export default function WorkoutsPage(){
  const {setPage} = useContext(PageContext)
  const {openModal, closeModal} = useContext(ModalsContext);
  const {user} = useContext(UserContext);
  const [workoutList, setWorkoutList] = useState(null)
  const service = useService();


  if(!user){
    setPage('HOME');
  }

  useEffect(() => {
    openModal('loading')
    service.getWorkouts()
      .then((response) => handleGetWorkouts(response))
      .catch((error) => getWorkoutsFail('catch'))
  }, [])

  function handleGetWorkouts(response) {
    if(response.success){
      closeModal('loading');
      setWorkoutList(response.data);
    } else {
      getWorkoutsFail(response.message)
    }
  }

  function getWorkoutsFail(message) {
    closeModal('loading');
    openModal('message', message);
  }

  return (
    <>
      <Title>История тренировок</Title>
      {!workoutList && <p>Нет тренировок</p> }
      {workoutList && <WorkoutList list={workoutList}/>}

    </>
  )
}