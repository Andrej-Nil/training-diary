import Form from "../Form/Form";
import {useState} from "react";
import Control from "../Control/Control";
import useCheckInput from "../../hooks/useCheckInput.js";
import Button from "../Button/Button";
import useCheckForm from "../../hooks/useCheckForm.js";


export default function LoginForm({login}){
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
      const isNotValid = checkForm([changeableInput, copyPrev.password]);
      changeableInput.value = value;
      return {
        ...copyPrev,
        [name]: changeableInput,
        isNotValid,
      }
    })
  }

  async function handlerSubmit(e){
    e.preventDefault();
    if(form.isNotValid){
      return;
    }
    login(e);

  }

  // function handleEmailChange(e){
  //   console.log('Email');
  // }

  // function  handlePasswordChange(e){
  //   console.log('password');
  // }
 return(
   <Form onSubmit={handlerSubmit} action='login'>
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
    <Button disabled={form.isNotValid} type="submit">Войти</Button>

   </Form>
 )
}