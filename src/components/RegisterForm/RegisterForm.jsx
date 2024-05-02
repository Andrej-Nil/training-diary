import Form from "../Form/Form.jsx";
import {useState} from "react";
import useCheckInput from "../../hooks/useCheckInput.js";
import useCheckForm from "../../hooks/useCheckForm.js";
import Control from "../Control/Control.jsx";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";

export default function RegisterForm(){
  const [form, setForm] = useState({
    name: {
      name: 'name',
      id: 'LoginName',
      value: '',
      required: true,
      hasError: false
    },
    email: {
      name: 'email',
      id: 'LoginEmail',
      value: '',
      required: true,
      hasError: false
    },
    password: {
      name: 'password',
      id: 'LoginPassword',
      value: '',
      required: true,
      hasError: false
    },
    isNotValid: true
  })
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
      const isNotValid = checkForm([changeableInput, copyPrev.email, copyPrev.password]);

      return {
        ...copyPrev,
        [name]: changeableInput,
        isNotValid,
      }
    })
  }

  function handlerSubmit(e){
    e.preventDefault();
    console.log('next');
  }

  return(
    <Form action="register">
      <Control label='Имя' htmlFor={form.name.id}>
        <Input
          name={form.name.name}
          id={form.name.id}
          value={form.name.value}
          hasError={form.name.hasError}
          placeholder="Имя"
          type='text'
          onChange={handleChange}
        />
      </Control>

      <Control label='Email' htmlFor={form.email.id}>
        <Input
          name={form.email.name}
          id={form.email.id}
          value={form.email.value}
          hasError={form.email.hasError}
          placeholder="Email"
          type='text'
          onChange={handleChange}
        />
      </Control>

      {/*<Control*/}
      {/*  name={form.email.name}*/}
      {/*  id={form.email.id}*/}
      {/*  value={form.email.value}*/}
      {/*  type='text'*/}
      {/*  hasError={form.email.hasError}*/}
      {/*  label='Email'*/}
      {/*  placeholder="Email"*/}
      {/*  onChange={handleChange}*/}

      {/*/>*/}

      <Control label='Пароль' htmlFor={form.password.id}>
        <Input
          name={form.password.name}
          id={form.password.id}
          value={form.password.value}
          hasError={form.password.hasError}
          placeholder="Пароль"
          type='text'
          onChange={handleChange}
        />
      </Control>

      <Button disabled={form.isNotValid} onClick={(e) => handlerSubmit(e)}>Зарегестрироваться</Button>

    </Form>
  )
}