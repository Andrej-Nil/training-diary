import App from "@/Layouts/App/App.jsx";
import Container from "@/Components/Container/index.js";
import Content from "@/Components/Content/Content.jsx";
import TrainingList from "@/Components/TrainingList/TrainingList.jsx";
import {Head} from "@inertiajs/react";
import StartTraining from "@/Components/StartTraining/StartTraining.jsx";
import {useSelector} from "react-redux";
import CurrentTraining from "@/Components/CurrentTraining/CurrentTraining.jsx";
const Home = (props) => {
    const {auth} = props;

    const {isTraining} = useSelector((state) => state.currentTraining);

    const training = isTraining ? <CurrentTraining /> : <StartTraining />
    return(
        <App auth={auth}>
            <Head title="Главная"/>
            <Container>
                <Content>
                    {training}
                    <TrainingList />
                </Content>
            </Container>
        </App>
    )
}

export default Home;
