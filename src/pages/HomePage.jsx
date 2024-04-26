import {useContext} from "react";
import {UserContext} from "../App.jsx";
import WelcomeForGuest from "../components/WelcomeForGuest/WelcomForGuest";
import WelcomeForUser from "../components/WelcomeForUser/WelcomeForUser";
export default function HomePage({openModal, changePage, workout}){
  const [user] = useContext(UserContext);
  return (
    <>
      {user && <WelcomeForUser changePage={changePage} workout={workout}/>}
      {!user && <WelcomeForGuest openModal={openModal} />}
    </>
  )
}