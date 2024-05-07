import Title from "../components/Title/Title.jsx";
import Profile from "../components/Profile/Profile";
import {useContext} from "react";
import {PageContext, UserContext} from "../App.jsx";

export default function ProfilePage(){
  const {user} = useContext(UserContext);
  const {setPage} = useContext(PageContext);


  if(!user){
    setPage('HOME');
  }
  return (
    <>
      <Title>Страница профиля</Title>
      <Profile user={user}/>
    </>
  )
}