import './start-training-btn.scss';
import Btn from "@/Components/Btn/Btn.jsx";
import {useDispatch} from "react-redux";
import {showCreateForm} from "@/store/startTrainingSlice.js";


const StartTrainingBtn = () => {

    const dispatch = useDispatch();
    const showCreateFormHandler = () => {
        dispatch(showCreateForm(true));
    }
    return (
            <div className="start-training-btn">
                    <Btn click={showCreateFormHandler} text="Начать тренировку" type="dark"/>
            </div>
    )
}

export default StartTrainingBtn;
