import Block from "@/Components/Block/Block.jsx";
import BlockTitle from "@/Components/BlockTitle/BlockTitle.jsx";
import Form from "@/Components/Form/Form.jsx";
import Input from "@/Components/Input/Input.jsx";
import FormBottom from "@/Components/FormBottom/FormBottom.jsx";
import FormLink from "@/Components/FormLink/FormLink.jsx";
import Button from "@/Components/Button/Button.jsx";
import Btn from "@/Components/Btn/Btn.jsx";
import {useForm} from "@inertiajs/react";
import {useEffect} from "react";

const RegisterForm = () => {
    const {data, setData, post, processing, errors, reset} = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });


    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };


    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(name, value)
    }

    return (
        <Block small>
            <BlockTitle text="Регистрация"/>
            <Form submit={submit}>
                <Input
                    change={changeHandler}
                    label="Имя"
                    name="name"
                    value={data.name}
                    error={errors.name}
                />
                <Input
                    change={changeHandler}
                    label="E-Mail"
                    name="email"
                    value={data.email}
                    error={errors.email}
                />
                <Input
                    change={changeHandler}
                    label="Пароль"
                    type="password"
                    name="password"
                    password={data.password}
                    error={errors.password}
                />
                <Input
                    change={changeHandler}
                    label="Повторите пароль"
                    type="password"
                    name="password_confirmation"
                    value={data.password_confirmation}
                    error={errors.password_confirmation}
                />
                <FormBottom>
                    <FormLink text="Уже есть аккаунт?" href="login"/>
                    <Button type="submit">
                        <Btn type="dark" text="Зарегистрироваться"/>
                    </Button>
                </FormBottom>
            </Form>
        </Block>
    )
}


export default RegisterForm;
