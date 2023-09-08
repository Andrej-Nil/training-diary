import Block from "@/Components/Block/Block.jsx";
import Form from "@/Components/Form/Form.jsx";
import Button from "@/Components/Button/Button.jsx";
import Btn from "@/Components/Btn/Btn.jsx";
import FormBottom from "@/Components/FormBottom/FormBottom.jsx";
import Select from "@/Components/Select/Select.jsx";

const CreateTrainingForm = () => {
    return (
        <Block >
            <Form>
                <Select />
                <FormBottom>
                    <Btn type="dark" text="Отмена"/>
                    <Button type="submit">
                        <Btn type="dark" text="Старт"/>
                    </Button>
                </FormBottom>
            </Form>
        </Block>
    )
}

export default CreateTrainingForm;
