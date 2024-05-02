import Form from "../Form/Form";
import {useState} from "react";
import Control from "../Control/Control";
import useCheckInput from "../../hooks/useCheckInput.js";
import Button from "../Button/Button";
import useCheckForm from "../../hooks/useCheckForm.js";
import Input from "../Input/Input";


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
      changeableInput.value = value;

      const isNotValid = checkForm([changeableInput, copyPrev.password]);

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

 return(
   <Form onSubmit={handlerSubmit} action='login'>
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
    <Button disabled={form.isNotValid} type="submit">Войти</Button>

   </Form>
 )
}