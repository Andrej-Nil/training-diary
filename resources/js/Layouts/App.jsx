import {useSelector} from "react-redux";

const App = (props) => {
    const {user, children} = props;
    const {hello} = useSelector((state) => state.test)

    console.log(hello)
    return(
        <div className="app">


            {children}
        </div>
    )
}

export default App;
