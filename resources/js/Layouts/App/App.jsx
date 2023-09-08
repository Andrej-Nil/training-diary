import './app.scss';
import Header from "@/Components/Header/index.js";
import Footer from "@/Components/Footer/Footer.jsx";


const App = (props) => {
    const {auth, children} = props;
    return(
        <div className="app">
            <Header auth={auth}/>
            {children}
            <Footer/>
        </div>
    )
}

export default App;
