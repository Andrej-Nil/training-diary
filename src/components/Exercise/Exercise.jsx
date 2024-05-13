import classes from "./exercise.module.scss";
import ExerciseItem from "../ExerciseItem/ExerciseItem";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import useService from "../../hooks/useService.js";
import {useState} from "react";
import Message from "../Message/Message";
import saveIcon from "../../assets/icon/save.svg";

export default function Exercise({exercise, setWorkout, isEdit}) {
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

  function blurApproach(approachId) {
    const approach = approachList.find((item) => item.id === approachId);
    const data = {
      exerciseId: id,
      approach: approach
    }
    service.updateApproach(data)
      .then((response) => console.log(response))
      .catch((error) => console.log('ошибка'));
  }

  function save() {
    setIsLoading(true);
    const data = {
      exerciseId: id,
      approachList: approachList
    };
    service.save(data)
      .then((response) => saveSuccess(response))
      .catch((response) => saveError('Упс! Произошла ошибка'))
  }

  function saveSuccess(response){
    if(response.success){
      setIsLoading(false);
    }else{

      saveError(response);
    }
  }

  function saveError(response) {
    setIsLoading(false);
    setMessage(response.message);
  }

  function renderBottom() {
    return (
      <div className={classes.exercise__bottom}>
        <Button onClick={() => addApproach()}>Добавить +</Button>
        <Button onClick={() => save()}>  <img className={classes.exercise__icon} src={saveIcon} alt=""/> </Button>
      </div>
    )
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
                  blur={blurApproach}
                />
              )
          })
        }
      </div>
      {isEdit ? renderBottom() : null}

      {isLoading && <div className={classes.exercise__curtain}><Loader /></div>}
      {message && <div className={classes.exercise__curtain}><Message message={message} close={() => setMessage(null)}/></div>}
    </div>
  )
}