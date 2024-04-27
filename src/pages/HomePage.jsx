import {useContext} from "react";
import {ModalsContext, UserContext} from "../App.jsx";
import WelcomeForGuest from "../components/WelcomeForGuest/WelcomForGuest";
import WelcomeForUser from "../components/WelcomeForUser/WelcomeForUser";
export default function HomePage({changePage}){
  const {openModal} = useContext(ModalsContext);
  const [user] = useContext(UserContext);
  return (
    <>
      {user && <WelcomeForUser changePage={changePage} workout={user.isWorkout}/>}
      {!user && <WelcomeForGuest openModal={openModal} />}
    </>
  )
}