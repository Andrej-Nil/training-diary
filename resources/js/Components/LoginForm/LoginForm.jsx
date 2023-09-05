import Block from "@/Components/Block/Block.jsx";
import Form from "@/Components/Form/Form.jsx";
import BlockTitle from "@/Components/BlockTitle/BlockTitle.jsx";
import Input from "@/Components/Input/Input.jsx";

const LoginForm = () => {
    return (
        <Block small>
            <BlockTitle text="Вход"/>
            <Form >
                <Input />
            </Form>
        </Block>
    )
}

export default LoginForm;
