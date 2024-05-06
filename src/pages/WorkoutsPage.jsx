import Title from "../components/Title/Title";
import WorkoutList from "../components/WorkoutList/WorkoutList";
import useService from "../hooks/useService.js";
import {useContext, useEffect, useState} from "react";
import {ModalsContext, UserContext} from "../App.jsx";
export default function WorkoutsPage(){
  const {openModal} = useContext(ModalsContext);
  const [user, setUser] = useContext(UserContext);
  const [workoutList, setWorkoutList] = useState(null)
  const service = useService();


  if(!user){

  }
  useEffect(() => {
    service.getWorkouts()
      .then((response) => handleGetWorkouts(response))
      .catch((error) => console.log('thhjh'))
  })



  function handleGetWorkouts(response) {
    if(response.success){

    } else {
      getWorkoutsFile(response)
    }
  }

  function getWorkoutsFile() {

  }


  return (
    <>
      <Title>История тренировок</Title>
      {!workoutList && <p>Нет тренировок</p> }
      {workoutList && <WorkoutList list={workoutList}/> }
    </>
  )
}