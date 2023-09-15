import './training-card.scss';
import TrainingCardExercise from "@/Components/TrainingCardExercise/TrainingCardExercise.jsx";

const TrainingCard = () => {
    return (
        <div className="training-card">
            <div className="training-card__top">
                <span className="training-card__target">Грудь, Бицепс</span>

                <p className="training-card__time">
                    <span className="training-card__weekday">ПН</span>
                    <span className="training-card__date">21 июнь 2023</span>
                </p>
            </div>

            <div className="training-card__body">
                <div className="training-card__content">
                    {/*<TrainingCardExercise />*/}
                    {/*<TrainingCardExercise />*/}
                    {/*<TrainingCardExercise />*/}
                    {/*<TrainingCardExercise />*/}
                    {/*<TrainingCardExercise />*/}

                </div>
            </div>
        </div>
    )
}

export default TrainingCard;
