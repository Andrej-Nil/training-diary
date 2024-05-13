import Title from "../components/Title/Title";
import {useContext, useEffect, useState} from "react";
import {ModalsContext,  UserContext} from "../App.jsx";
import {Navigate} from "react-router-dom";
import withService from "../hoc/withService.jsx";
import compose from "../utils/compose.js";
import withRouter from "../hoc/withRouter.jsx";
import classes from "../components/Workout/workout.module.scss";
import Exercise from "../components/Exercise/Exercise.jsx";
import Add from "../components/Add/Add.jsx";
import Button from "../components/Button/Button.jsx";
import AddExerciseModal from "../components/AddExerciseModal/AddExerciseModal.jsx";

function WorkoutsShowPage({service, params}){
  const {modals, openModal, closeModal} = useContext(ModalsContext);
  const {user, setUser} = useContext(UserContext);
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    openModal('loading');
    service.getWorkouts(params)
      .then((response) => handleWorkoutResponse(response))
      .catch((error) => handleWorkoutFail('Упс! Что то пошло не так'));
  }, []);
  if(!user){
    return <Navigate to={'/'} />
  }


  function handleWorkoutFail(message){
    closeModal('loading');
    openModal('message', message);
  }

  function handleWorkoutResponse(response) {
    if(response.success){
        closeModal('loading');
        setWorkout(response.data);
    } else{
      handleWorkoutFail(response.message)
    }
  }



  function getExercise(data){
    openModal('loading');
    service.getExercise()
      .then((response) => getExerciseSuccess(response))
      .catch((error) => fail({message: 'Упс! Что то пошло не по плану'}))
  }

  function getExerciseSuccess(response){
    if(response.success){
      closeModal('loading');
      setWorkout((prev) => {
        return { ...prev, exerciseList: response.data }
      })
    } else {
      fail(response.map)
    }
  }


  function end() {
    openModal('loading', 'Идет окончание...');
    service.end()
      .then((response) => handleEndResponse(response))
      .catch((error) => endFail('Упс, что то пошло не так'))
  }

  function handleEndResponse(response){
    if(response.success){
      closeModal('loading');
      openModal('message', 'Удача!');
      setUser((prev) => {
        return{...prev, isWorkout: false};
      });

    }else{
      endFail(response.message);
    }
  }
  function endFail(message){
    closeModal('loading');
    openModal('message', message);
  }

if(!workout){
  return null
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
              return <Exercise key={exercise.id} isEdit={workout.isActive} exercise={exercise} setWorkout={setWorkout}/>
            })
          }

          {workout.isActive && <Add onClick={() => openModal('addExercise')}/>}
        </div>

        <div className={classes.workout__bottom}>
          {workout.isActive && <Button onClick={end}>Закончить тренировку</Button>}

        </div>
      </div>

      {modals.addExercise.isOpen && <AddExerciseModal getExercise={getExercise}/>}
    </>
  )
}
export default compose(
  withService(),
  withRouter(),
)(WorkoutsShowPage);