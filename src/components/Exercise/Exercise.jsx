import classes from "./exercise.module.scss";
import ExerciseItem from "../ExerciseItem/ExerciseItem";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import useService from "../../hooks/useService.js";
import {useState} from "react";
import Message from "../Message/Message";

export default function Exercise({exercise, setWorkout}) {
  const service = useService();
  const {approachList, title, id} = exercise;
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  function addApproach() {
    setIsLoading(true);


    service.addApproach(id)
      .then((response) => addApproachSuccess(response))
      .catch((error) => addApproachFail( "Упс! Что то пошло не так!"))

  }

  function addApproachSuccess(response) {
    if (response.success) {
      getApproach();
    } else {
      addApproachFail(response.message);
    }
  }

  function addApproachFail(message) {
    setIsLoading(false);
    setMessage(message);
  }

  function getApproach(){
    service.getApproach(id)
      .then((response) => getApproachSuccess(response))
      .catch((error) => getApproachFail("Упс! Что то пошло не так!"))
  }

  function getApproachSuccess(response){
    setIsLoading(false);
      if(response.success){
        setWorkout((prev) => {
          const copyExerciseList = [...prev.exerciseList];
          const newList = copyExerciseList.map((item) => {
            if(item.id === id){
              return {...item, approachList: response.data};
            }
            return item;
          })
          return {...prev, exerciseList: newList}
        })
      }else{
        getApproachFail(response.message)
      }
  }

  function getApproachFail(message){
    setIsLoading(false);
    setMessage(message);
  }

  function changeApproach(approachId, input) {
    const name = input.name;
    const value = input.value;
    setWorkout((prev) => {
      const copyExerciseList = [...prev.exerciseList];
      const copyExercise = {...copyExerciseList.find((exercise) => exercise.id === id)};
      const copyApproachList = [...copyExercise.approachList];
      const copyChangedApproach = {...copyApproachList.find((approach) => approach.id === approachId)};
      copyChangedApproach[name] = value;
      // const newList = copyExerciseList.map((item) => {
      //   if(item.id === id){
      //     return {...item, approachList: response.data};
      //   }
      //   return item;
      // })

      const newApproachList = copyApproachList.map((approach) => {
        if(approach.id === copyChangedApproach.id) {
          return copyChangedApproach
        }
        return approach;
      })

      copyExercise.approachList = newApproachList;

      const newExerciseList = copyExerciseList.map((exercise) => {
        if(exercise.id === copyExercise.id) {
          return copyExercise
        }
        return exercise;
      })

      return {
        ...prev,
        exerciseList: newExerciseList
      }
    })
  }



  return (
    <div className={classes.exercise}>
      <p className={classes.exercise__title}>{title}</p>
      <div className={classes.exercise__list}>
        {
          approachList.map((approach, idx) => {
            return(
                <ExerciseItem
                  key={approach.id}
                  idx={idx}
                  approach={approach}
                  change={changeApproach}
                />
              )

          })
        }
      </div>

      <Button onClick={() => addApproach()}>Добавить +</Button>

      {isLoading && <div className={classes.exercise__curtain}><Loader /></div>}
      {message && <div className={classes.exercise__curtain}><Message message={message} close={() => setMessage(null)}/></div>}
    </div>
  )
}