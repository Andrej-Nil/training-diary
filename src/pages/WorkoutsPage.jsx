import Title from "../components/Title/Title";
import WorkoutList from "../components/WorkoutList/WorkoutList";
import {useContext, useEffect, useState} from "react";
import {ModalsContext,  UserContext} from "../App.jsx";
import {Navigate} from "react-router-dom";
import withService from "../hoc/withService.jsx";

function WorkoutsPage({service}){
  const {openModal, closeModal} = useContext(ModalsContext);
  const {user} = useContext(UserContext);
  const [workoutList, setWorkoutList] = useState(null)






  useEffect(() => {

    if(user){
      openModal('loading')
      service.getWorkouts()
        .then((response) => handleGetWorkouts(response))
        .catch((error) => getWorkoutsFail('catch'))
    }

  }, [])
  if(!user){
    return <Navigate to={'/'} />
  }

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


export default withService()(WorkoutsPage);