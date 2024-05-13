import classes from './workout.module.scss'
import Add from "../Add/Add";
import Exercise from "../Exercise/Exercise";
import {useContext, useEffect, useState} from "react";
import useService from "../../hooks/useService.js";
import {ModalsContext} from "../../App.jsx";
import AddExerciseModal from "../AddExerciseModal/AddExerciseModal.jsx";
import Button from "../Button/Button";


export default function Workout({setUser}) {
  const {openModal, closeModal, modals} = useContext(ModalsContext);
  const [workout, setWorkout] = useState(null);
  // const [workout, setWorkout] = useState({
  //   id: `id+${Date.now()}`,
  //   title: 'Грудь, бицепс',
  //   date: 'Чт 02.05.2024',
  //   description: 'Тренировка с не большими весами',
  //   exerciseList: [
  //     {
  //       id: `id==${Date.now()}`,
  //       title: 'Жим на горизонтальной скамье',
  //       approachList: [{id:`id+=${Date.now()}`, intensity: '',  unit: '', isEdited: true}]
  //     },
  //     {
  //       id: `id==33`,
  //       title: 'Присяд',
  //       approachList: [{id:`id+=11`, intensity: '',  unit: '', isEdited: true}]
  //     }
  //   ],
  //
  // });
  const service = useService();
  useEffect(() => {
    openModal('loading', 'Идет загрузка...')
    service.getCurrent()
      .then((data) => getCurrentSuccess(data))
      .catch((error) => fail({message: 'Упс! Что то пошло не по плану'}))
  }, []);



  function getCurrentSuccess(response){
    if(response.success){
      closeModal('loading');
      setWorkout(response.data);
    }else{
      fail(response);
    }
  }

  function fail(response) {
    closeModal('loading');
    openModal('message', response.message);
  }
  //
  // function getExercise(data){
  //   openModal('loading');
  //   service.getExercise()
  //     .then((response) => getExerciseSuccess(response))
  //     .catch((error) => fail({message: 'Упс! Что то пошло не по плану'}))
  // }
  //
  // function getExerciseSuccess(response){
  //   if(response.success){
  //     closeModal('loading');
  //     setWorkout((prev) => {
  //       return { ...prev, exerciseList: response.data }
  //     })
  //   } else {
  //     fail(response.map)
  //   }
  // }
  //
  // function end() {
  //   openModal('loading', 'Идет окончание...');
  //     service.end()
  //       .then((response) => handleEndResponse(response))
  //       .catch((error) => endFail('Упс, что то пошло не так'))
  // }
  //
  // function handleEndResponse(response){
  //   if(response.success){
  //     closeModal('loading');
  //     openModal('message', 'Удача!');
  //     setUser((prev) => {
  //       return{...prev, isWorkout: false};
  //     });
  //
  //   }else{
  //     endFail(response.message);
  //   }
  // }
  // function endFail(message){
  //   closeModal('loading');
  //   openModal('message', message);
  // }

  if(!workout){
    return null;
  }

  return (
    <>
      <div className={classes.workout}>
        <div className={classes.workout__top}>
          <p className={classes.workout__date}>{workout.date}</p>
          <h2 className={classes.workout__title}>{workout.title}</h2>

        </div>
        <p className={classes.workout__desc}>{workout.description}</p>

        <div className={classes.workout__list}>

          {
            workout.exerciseList.map((exercise) => {
              return <Exercise key={exercise.id} exercise={exercise} setWorkout={setWorkout}/>
            })
          }

          <Add onClick={() => openModal('addExercise')}/>
        </div>

        <div className={classes.workout__bottom}>
          <Button onClick={end}>Закончить тренировку</Button>
        </div>
      </div>

      {modals.addExercise.isOpen && <AddExerciseModal getExercise={getExercise}/>}
    </>
    )

}