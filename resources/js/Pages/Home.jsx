import App from "@/Layouts/App/App.jsx";
import Container from "@/Components/Container/index.js";
import WelcomeTablet from "@/Components/WelcomeTablet/WelcomeTablet.jsx";
import Content from "@/Components/Content/Content.jsx";

const Home = (props) => {
 const {auth} = props;

    return(
        <App auth={auth}>
            <Container>
                <Content>
                    <WelcomeTablet/>
                </Content>
            </Container>
        </App>

    )
}

export default Home;
