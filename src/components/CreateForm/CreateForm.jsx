import Form from "../Form/Form";
import Button from "../Button/Button.jsx";
import Control from "../Control/Control.jsx";
import {useState} from "react";
import Input from "../Input/Input.jsx";
import Textarea from "../Textarea/Textarea";

export default function CreateForm({create}){
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
    },
    // email: {
    //   name: 'email',
    //   id: 'LoginEmail',
    //   value: '',
    //   required: true,
    //   hasError: false
    // },
    // password: {
    //   name: 'password',
    //   id: 'LoginPassword',
    //   value: '',
    //   required: true,
    //   hasError: false
    // },
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
    // cons
    create(e);
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
          onChange={handleChange}
        />
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

      {/*<Control*/}
      {/*  name={form.title.name}*/}
      {/*  id={form.title.id}*/}
      {/*  value={form.title.value}*/}
      {/*  type='title'*/}
      {/*  label='Название'*/}
      {/*  placeholder="Название"*/}
      {/*  onChange={handleChange}*/}
      {/*/>*/}

      <Button type="submit">Начать тренировку</Button>
    </Form>
  )
}