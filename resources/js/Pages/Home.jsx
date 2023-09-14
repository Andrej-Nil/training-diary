import App from "@/Layouts/App/App.jsx";
import Container from "@/Components/Container/index.js";
import Content from "@/Components/Content/Content.jsx";
import TrainingList from "@/Components/TrainingList/TrainingList.jsx";
import {Head} from "@inertiajs/react";
import StartTraining from "@/Components/StartTraining/StartTraining.jsx";

const Home = (props) => {
    const {auth} = props;

    return(
        <App auth={auth}>
            <Head title="Главная"/>
            <Container>
                <Content>
                   <StartTraining />

                    <TrainingList />
                </Content>
            </Container>
        </App>
    )
}

export default Home;
