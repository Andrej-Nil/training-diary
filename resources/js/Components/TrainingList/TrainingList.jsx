import './training-list.scss';
import Block from "@/Components/Block/Block.jsx";
import Title from "@/Components/Title/Title.jsx";
import TrainingCard from "@/Components/TrainingCard/TrainingCard.jsx";

const TrainingList = () => {
    return(

        <>
            <Title text="Последнии тренировки"/>

            <div className="TrainingList">
                <TrainingCard />
            </div>
        </>
    )
}

export default TrainingList;
