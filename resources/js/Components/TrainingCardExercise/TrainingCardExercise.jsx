import './training-card-exercise.scss';
import TrainingCardTable from "@/Components/TrainingCardTable/TrainingCardTable.jsx";

const TrainingCardExercise = () => {
    return (
        <div className="training-card-exercise">
            <p className="training-card-exercise__title">Жим штанги лежа</p>
            <TrainingCardTable/>
        </div>
    )
}

export default TrainingCardExercise;
