import Block from "@/Components/Block/Block.jsx";
import BlockTitle from "@/Components/BlockTitle/BlockTitle.jsx";
import Form from "@/Components/Form/Form.jsx";
import Input from "@/Components/Input/Input.jsx";
import FormBottom from "@/Components/FormBottom/FormBottom.jsx";
import FormLink from "@/Components/FormLink/FormLink.jsx";
import Button from "@/Components/Button/Button.jsx";
import Btn from "@/Components/Btn/Btn.jsx";

const RegisterForm = (props) => {
    const {changeHandler, values, errors, submit} = props;

    return (
        <Block small>
            <BlockTitle text="Регистрация"/>
            <Form submit={submit}>
                <Input
                    change={changeHandler}
                    label="Имя"
                    name="name"
                    value={values.name}
                    error={errors.name}
                />
                <Input
                    change={changeHandler}
                    label="E-Mail"
                    name="email"
                    value={values.email}
                    error={errors.email}
                />
                <Input
                    change={changeHandler}
                    label="Пароль"
                    type="password"
                    name="password"
                    password={values.password}
                    error={errors.password}
                />
                <Input
                    change={changeHandler}
                    label="Повторите пароль"
                    type="password"
                    name="password_confirmation"
                    value={values.password_confirmation}
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
