import {useContext, useState} from "react";
import {UserContext} from "../../App.jsx";
import Form from "../Form/Form.jsx";
import Control from "../Control/Control.jsx";
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";
import useCheckInput from "../../hooks/useCheckInput.js";
import useCheckForm from "../../hooks/useCheckForm.js";
import withService from "../../hoc/withService.jsx";

function AddExerciseForm({openModal, closeModal, getExercise, service}){
  const {user, setUser} = useContext(UserContext);
  const [form, setForm] = useState({
    name: {
      name: 'name',
      id: 'nameName',
      value: '',
      required: true,
      hasError: false
    },
    isNotValid: true

  });

  const check = useCheckInput();
  const checkForm = useCheckForm();

  function handleChange(e){
    const name = e.target.name;
    const value = e.target.value;

    setForm((prev) => {
      const copyPrev = {...prev};
      const changeableInput = {...copyPrev[name]};

      if(changeableInput.required){
        changeableInput.hasError = check(value);
      }
      changeableInput.value = value;
      const isNotValid = checkForm([changeableInput]);

      return {
        ...copyPrev,
        [name]: changeableInput,
        isNotValid,
      }
    })
  }

  function handlerSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.target);

    openModal('loading', 'Добовляем...');
    service.createTraining(formData)
      .then((response) => handleResponse(response))
      .catch((error) => fail({message: "Упс! Что то пошло не по плану"}))
  }


  function handleResponse(response){
    closeModal('loading');

    if(response.success){
      success(response)
    }else{

      fail(response)
    }

  }

  function success(response) {
    closeModal('loading');
    closeModal('addExercise');
    getExercise();
  }
  function fail(data) {
    closeModal('loading');
    openModal('message', data.message);
  }
  return (
    <Form onSubmit={handlerSubmit} action="addExercise">

      <Control label='Название' htmlFor={form.name.id}>
        <Input
          name={form.name.name}
          id={form.name.id}
          value={form.name.value}
          hasError={form.name.hasError}
          placeholder="Название"
          type='text'
          onChange={handleChange}
         />
      </Control>

      <Button disabled={form.isNotValid} type="submit">Добавить</Button>
    </Form>
  )
}
export default withService()(AddExerciseForm);
