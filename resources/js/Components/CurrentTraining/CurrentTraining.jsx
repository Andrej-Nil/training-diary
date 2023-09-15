import Training from "@/Components/Training/Training.jsx";
import {useDispatch, useSelector} from "react-redux";

const CurrentTraining = () => {
    // const dispatch = useDispatch()
    const {training, isTraining} = useSelector( (state) => state.currentTraining );
    return <Training {...training} active={isTraining}/>
}

export default CurrentTraining
