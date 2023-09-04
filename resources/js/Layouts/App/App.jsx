import './app.scss';
import {useSelector} from "react-redux";
import Header from "@/Components/Header/index.js";
import Footer from "@/Components/Footer/Footer.jsx";


const App = (props) => {
    console.log(props)
    const {auth, children} = props;
    const {hello} = useSelector((state) => state.test);
    return(
        <div className="app">
            <Header auth={auth}/>



            {children}
            <Footer/>
        </div>
    )
}

export default App;
