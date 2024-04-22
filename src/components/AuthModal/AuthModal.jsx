import Modal from "../Modal/Modal";
import Tabs from "../Tabs/Tabs.jsx";
import TabBtn from "../TabBtn/TabBtn";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

export default function AuthModal({closeModal, tab, changeTab, login, register}){
  return(
    <Modal darkBg cross close={closeModal}>
      <Tabs>
        <TabBtn isActive={tab === 'LOGIN'} onClick={() => changeTab('LOGIN')}>Вход</TabBtn>
        <TabBtn isActive={tab === 'REGISTER'} onClick={() => changeTab('REGISTER')}>Регистрация</TabBtn>
      </Tabs>

      {tab === 'LOGIN' ? <LoginForm login={login}/> : null}
      {tab === 'REGISTER' ? <RegisterForm register={register}/> : null}
    </Modal>
  )
}