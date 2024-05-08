import Title from "../components/Title/Title";
import WorkoutList from "../components/WorkoutList/WorkoutList";
import useService from "../hooks/useService.js";
import {useContext, useEffect, useState} from "react";
import {ModalsContext,  UserContext} from "../App.jsx";
import {Navigate} from "react-router-dom";

export default function WorkoutsShowPage(){
  const {openModal, closeModal} = useContext(ModalsContext);
  const {user} = useContext(UserContext);
  const [workoutList, setWorkoutList] = useState(null)
  const service = useService();

  if(!user){
    return <Navigate to={'/'} />
  }

  return (
    <Title>Тренировка</Title>
  )
}