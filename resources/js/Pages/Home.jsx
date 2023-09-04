import App from "@/Layouts/App/App.jsx";
import Container from "@/Components/Container/index.js";
import Welcome from "@/Components/Welcome/Welcome.jsx";
import Content from "@/Components/Content/Content.jsx";

const Home = (props) => {
 const {auth} = props;

    return(
        <App auth={auth}>
            <Container>
                <Content>


                    <Welcome />
                </Content>
            </Container>
        </App>

    )
}

export default Home;
