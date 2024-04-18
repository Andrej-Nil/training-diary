import Form from "../Form/Form.jsx";
import {useState} from "react";
import useCheckInput from "../../hooks/useCheckInput.js";
import useCheckForm from "../../hooks/useCheckForm.js";
import Control from "../Control/Control.jsx";
import Button from "../Button/Button.jsx";

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
      const isNotValid = checkForm([changeableInput, copyPrev.email, copyPrev.password]);
      changeableInput.value = value;
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
      <Control
        name={form.name.name}
        id={form.name.id}
        value={form.name.value}
        type='text'
        hasError={form.name.hasError}
        label='Имя'
        placeholder="Имя"
        autoFocus
        onChange={handleChange}
      />

      <Control
        name={form.email.name}
        id={form.email.id}
        value={form.email.value}
        type='text'
        hasError={form.email.hasError}
        label='Email'
        placeholder="Email"
        onChange={handleChange}

      />

      <Control
        name={form.password.name}
        id={form.password.id}
        value={form.password.value}
        type='password'
        hasError={form.password.hasError}
        label='Пароль'
        placeholder="Пароль"
        onChange={handleChange}
      />

      <Button disabled={form.isNotValid} onClick={(e) => handlerSubmit(e)}>Зарегестрироваться</Button>

    </Form>
  )
}