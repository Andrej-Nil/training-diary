import Form from "../Form/Form";
import Button from "../Button/Button.jsx";
import Control from "../Control/Control.jsx";
import {useContext, useState} from "react";
import Input from "../Input/Input.jsx";
import Textarea from "../Textarea/Textarea";
import {UserContext} from "../../App.jsx";
import withService from "../../hoc/withService.jsx";

function CreateForm({openModal, closeModal, service}){
  const {user, setUser} = useContext(UserContext);
  const [form, setForm] = useState({
    title: {
      name: 'title',
      id: 'titleName',
      value: '',
    },
    description: {
      name: 'description',
      id: 'titleDescription',
      value: '',
    }
  });
  function handleChange(e){
    const name = e.target.name;
    const value = e.target.value;

    setForm((prev) => {
      const copyPrev = {...prev};
      const changeableInput = {...copyPrev[name]};

      changeableInput.value = value;
      return {
        ...copyPrev,
        [name]: changeableInput,
      }
    })
  }


  function handlerSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    openModal('loading')
    service.createTraining(formData)
      .then((data) => handleResponse(data))
      .catch((error) => fail({message: "Упс! Что то пошло не по плану"}))
  }


  function handleResponse(data){
    closeModal('loading', 'Создание тренировки');
    if(data.success){
      success(data)
    }else{
      fail(data)
    }

  }

  function success() {
    closeModal('loading');
    closeModal('create');
    setUser((prev) => {
      return {
        ...prev,
        isWorkout: true
      }
    })

  }
  function fail(data) {
    closeModal('loading');
    openModal('message', data.message)
  }
  // disabled={form.isNotValid}
  return (
    <Form onSubmit={handlerSubmit} action="create">

      <Control label='Название' htmlFor={form.title.id}>
        <Input
          name={form.title.name}
          id={form.title.id}
          value={form.title.value}
          placeholder="Название"
          type='text'
          onChange={handleChange} />
      </Control>

      <Control label='Описание' htmlFor={form.description.id}>
          <Textarea
            name={form.description.name}
            id={form.description.id}
            value={form.description.value}
            rows="5"
            placeholder="Описание"
            onChange={handleChange} />
      </Control>


      <Button type="submit">Начать тренировку</Button>
    </Form>
  )
}


export default withService()(CreateForm);