import './start-training.scss';
import Block from "@/Components/Block/Block.jsx";
import StartTrainingBtn from "@/Components/StartTrainingBtn/StartTrainingBtn.jsx";
import CreateTrainingForm from "@/Components/CreateTrainingForm/CreateTrainingForm.jsx";
import {useSelector} from "react-redux";

const StartTraining = () => {

    const {isShowCreateForm} = useSelector((state) => state.startTraining);

    const content = isShowCreateForm ? <CreateTrainingForm /> : <StartTrainingBtn />
    return (
        <Block > {content}  </Block>
    )
}

export default StartTraining;
