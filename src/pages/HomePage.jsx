import {useContext} from "react";
import {ModalsContext, PageContext, UserContext} from "../App.jsx";
import WelcomeForGuest from "../components/WelcomeForGuest/WelcomForGuest";
import WelcomeForUser from "../components/WelcomeForUser/WelcomeForUser";
export default function HomePage(){
  const {openModal} = useContext(ModalsContext);
  const {user} = useContext(UserContext);
  const {setPage} = useContext(PageContext)
  return (
    <>
      {user && <WelcomeForUser changePage={setPage} workout={user.isWorkout}/>}
      {!user && <WelcomeForGuest openModal={openModal} />}
    </>
  )
}