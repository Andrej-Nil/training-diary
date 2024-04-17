import Modal from "../Modal/Modal";
import Tabs from "../Tabs/Tabs.jsx";
import TabBtn from "../TabBtn/TabBtn";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

export default function AuthModal({close, tab, changeTab}){
  return(
    <Modal close={close}>
      <Tabs>
        <TabBtn isActive={tab === 'LOGIN'} onClick={() => changeTab('LOGIN')}>Вход</TabBtn>
        <TabBtn isActive={tab === 'REGISTER'} onClick={() => changeTab('REGISTER')}>Регистрация</TabBtn>
      </Tabs>

      {tab === 'LOGIN' ? <LoginForm /> : null}
      {tab === 'REGISTER' ? <RegisterForm /> : null}
    </Modal>
  )
}