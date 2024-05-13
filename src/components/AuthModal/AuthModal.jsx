import Modal from "../Modal/Modal";
import Tabs from "../Tabs/Tabs.jsx";
import TabBtn from "../TabBtn/TabBtn";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

export default function AuthModal(props){
  const {close, changeTab, tab, login, register} = props;
  function handleChangeTab(tab){
    changeTab('auth', tab)
  }
  return(
    <Modal darkBg cross close={() => close('auth')}>
      <Tabs>
        <TabBtn isActive={tab === 'LOGIN'} onClick={() => handleChangeTab('LOGIN')}>Вход</TabBtn>
        <TabBtn isActive={tab === 'REGISTER'} onClick={() => handleChangeTab('REGISTER')}>Регистрация</TabBtn>
      </Tabs>

      {tab === 'LOGIN' ? <LoginForm login={login}/> : null}
      {tab === 'REGISTER' ? <RegisterForm register={register}/> : null}
    </Modal>
  )
}