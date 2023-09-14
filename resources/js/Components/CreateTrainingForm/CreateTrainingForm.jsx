import Form from "@/Components/Form/Form.jsx";
import Button from "@/Components/Button/Button.jsx";
import Btn from "@/Components/Btn/Btn.jsx";
import FormBottom from "@/Components/FormBottom/FormBottom.jsx";
import {useDispatch} from "react-redux";
import {hideCreateForm} from "@/store/startTrainingSlice.js";
import TypeTrainingSelect from "@/Components/TypeTrainingSelect/TypeTrainingSelect.jsx";
import MuscleGroupSelect from "@/Components/MuscleGroupSelect/MuscleGroupSelect.jsx";


const CreateTrainingForm = () => {

    const dispatch = useDispatch();
    const hideCreateFormHandler = () => {
        dispatch(hideCreateForm(false));
    }
    return (
            <Form>
                    <TypeTrainingSelect />
                    <MuscleGroupSelect />


                <FormBottom>
                    <Btn click={hideCreateFormHandler} type="dark" text="Отмена"/>
                    <Button type="submit">
                        <Btn type="dark" text="Старт"/>
                    </Button>
                </FormBottom>
            </Form>
    )
}

export default CreateTrainingForm;
