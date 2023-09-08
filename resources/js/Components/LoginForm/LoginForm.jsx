import Block from "@/Components/Block/Block.jsx";
import Form from "@/Components/Form/Form.jsx";
import BlockTitle from "@/Components/BlockTitle/BlockTitle.jsx";
import Input from "@/Components/Input/Input.jsx";
import FormLink from "@/Components/FormLink/FormLink.jsx";
import Button from "@/Components/Button/Button.jsx";
import Btn from "@/Components/Btn/Btn.jsx";
import FormBottom from "@/Components/FormBottom/FormBottom.jsx";
import {useForm} from "@inertiajs/react";
import {useEffect} from "react";

const LoginForm = () => {

    const {data, setData, post, processing, errors, reset} = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(name, value)
    }
    return (
        <Block small>
            <BlockTitle text="Вход"/>
            <Form submit={submit}>
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

                <FormBottom>
                    <FormLink text="Нет аккаунт?" href="register"/>
                    <Button type="submit">
                        <Btn type="dark" text="Войти"/>
                    </Button>
                </FormBottom>
            </Form>
        </Block>
    )
}

export default LoginForm;
