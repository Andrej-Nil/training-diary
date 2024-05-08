import Title from "../components/Title/Title.jsx";
import Profile from "../components/Profile/Profile";
import {useContext} from "react";
import {UserContext} from "../App.jsx";
import {Navigate} from "react-router-dom";

export default function ProfilePage(){
  const {user} = useContext(UserContext);

  if(!user){
    return <Navigate to={'/'} />
  }

  return (
    <>
      <Title>Страница профиля</Title>
      <Profile user={user}/>
    </>
  )
}