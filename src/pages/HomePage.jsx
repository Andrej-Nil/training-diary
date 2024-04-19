import {useContext} from "react";
import {UserContext} from "../App.jsx";
import WelcomeForGuest from "../components/WelcomeForGuest/WelcomForGuest";
import WelcomeForUser from "../components/WelcomeForUser/WelcomeForUser";
import Workout from "../components/Workout/Workout";
export default function HomePage({openAuthModal, workout}){
  const [user] = useContext(UserContext);
  return (
    <>
      <Workout />
      {/*{workout && user ? <Workout /> : null}*/}
      {user && <WelcomeForUser />}
      {!user && <WelcomeForGuest openAuthModal={openAuthModal} />}
    </>
  )
}