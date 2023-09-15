import './training.scss';
import TrainingBottom from "@/Components/TrainingBottom/TrainingBottom.jsx";
import ExerciseList from "@/Components/ExerciseList/ExerciseList.jsx";

const Training = (props) => {
    const {exerciseList, active, muscleGroup} = props;

    const trainingBottom = active ? <TrainingBottom /> : null;

    return (
            <div className="training">
                <div className="training__top">
                    <span className="training__muscle">{muscleGroup}</span>

                </div>
                <div className="training__body">

                    <ExerciseList />

                    {trainingBottom}
                </div>



            </div>
    )
}


export default Training;
