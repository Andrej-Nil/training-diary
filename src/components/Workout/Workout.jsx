import classes from './workout.module.scss'
import WorkoutRow from "../WorkoutRow/WorkoutRow";
import Add from "../Add/Add";
import Exercise from "../Exercise/Exercise";
import {useContext, useEffect, useState} from "react";
import useService from "../../hooks/useService.js";
import {ModalsContext} from "../../App.jsx";


export default function Workout({user}) {
  const {openModal, closeModal} = useContext(ModalsContext);
  const [workout, setWorkout] = useState(null);
  const service = useService();
  useEffect(() => {
    openModal('loading', 'Идет загрузка...')
    service.getCurrent()
      .then((data) => success(data))
      .catch((error) => fail({message: 'Упс! Что то пошло не по плану'}))
  }, []);

  function success(data){
    closeModal('loading');
    if(data.success){
      setWorkout(data);
      console.log('ksjdhfhd')

    }else{
      fail(data)
    }
  }
  function fail(data) {
    closeModal('loading');
    openModal('message', data.message)
  }
  // function handleChange(input, id) {
  //   console.log(input, id);
  // }
  //
  // function handleApproachChange(id, input, idx) {
  //   console.log(id, input, idx);
  // }
  //
  // function add() {
  //
  // }

  if(!workout){
    return null
  }



  return (
    <div className={classes.workout}>
      <div className={classes.workout__top}>
        <h2 className={classes.workout__title}>{workout.title}</h2>
        <p className={classes.workout__date}>{workout.date}</p>
      </div>
      <p className={classes.workout__desc}>{workout.description}</p>

      <div className={classes.workout__list}>
        <Exercise />
        <Add />
        {/*{actions.map((item)=>{*/}
        {/*  return <WorkoutRow key={item.id} changeApproach={handleApproachChange} handleChange={handleChange} {...item}/>*/}
        {/*})}*/}
      </div>


    </div>
  )
}