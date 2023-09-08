import './add-training.scss';
import Btn from "@/Components/Btn/Btn.jsx";
import Block from "@/Components/Block/Block.jsx";


const AddTraining = () => {
    return (
        <Block >
        <div className="add-training">
                <Btn text="Начать тренировку" type="dark"/>
        </div>
        </Block>
    )
}

export default AddTraining;
