import App from "@/Layouts/App.jsx";

const Home = (props) => {
 const {auth} = props;

    return(
        <App auth={auth}>
            <h1>Home page</h1>
        </App>

    )
}

export default Home;
