import Header from "./components/Header/Header";
import {createContext, useContext, useEffect, useState} from "react";
import Router from "./components/Router/Router";
import AuthModal from "./components/AuthModal/AuthModal";
import MessageModal from "./components/MessageModal/MessageModal";
import Footer from "./components/Footer/Footer";
import {ServiceContext} from "./index.jsx";
import LoadingModal from "./components/LoadingModal/LoadingModal.jsx";


export const UserContext = createContext(null);
export const ModalsContext = createContext(null);
function App() {
  const service = useContext(ServiceContext);
  const [user, setUser] = useState( null);
  useEffect(() => {
    openModal('loading')
      service.getUser()
        .then((data) => handleSetUser(data))
        .catch((error) => closeModal('loading'));
  }, [])

  const [modals, setModals] = useState({
    loading: {isOpen: false, option: 'Загружаю'},
    message: {isOpen: false, option: ''},
    auth: {isOpen: false, option: 'LOGIN'}
  });
  const [page, setPage] = useState(null);

  function openModal(key, option){
    setModals((prev) => {
      const modal = {...prev[key]}
      modal.isOpen = true;
      if(option){
        modal.option = option
      }
      return {
        ...prev,
        [key]: modal
      }
    })
  }

  function closeModal(key){
    setModals((prev) => {
      const modal = {...prev[key]}
      modal.isOpen = false;
      return { ...prev,  [key]: modal }
    })
  }

  function changeAuthTab(tab) {
    setModals((prev) => {
      const auth = {...prev.auth}
      auth.option = tab;
      return {  ...prev, auth }
    })
  }

  function handleSetUser(data) {
    closeModal('loading');
    if(data.success){
      setUser(data.user);
      setPage('HOME');
    }else{
      console.log(data.message);
    }
  }

  function login(e) {
    openModal('loading', 'Выполняем вход...')
    const formData = new FormData(e.target);
    service.login(formData)
      .then((data) => handleLoginResponse(data))
      .catch(() => fail({message: 'Упс! Что то пошло не так!'}));
  }

  function handleLoginResponse(data) {
    if (data.success) {
      successLogin(data);
    } else {
      fail(data)
    }
  }

  function successLogin(data) {
    closeModal('loading');
    closeModal('auth');
    setUser(data.user);
  }

  function register() {

  }


  function logout() {
    setUser(null);
    setPage('HOME');
  }

  function fail(data) {
    closeModal('loading');
    openModal('message', data.message);
  }


  return (
    <UserContext.Provider value={[user, setUser, logout]}>
      <ModalsContext.Provider value={[]} >
      <div className='app'>
        <Header openModal={openModal} changePage={setPage} page={page} logout={logout}/>
        <main className='main'>

          <div className='container'>
            {page && <Router changePage={setPage} openModal={openModal} page={page} />}
          </div>

        </main>

        <Footer/>

        {modals.auth.isOpen
          && <AuthModal
            tab={modals.auth.option}
            changeAuthTab={changeAuthTab}
            close={closeModal}
            login={login}
            register={register} />}

        {modals.message.isOpen && <MessageModal message={modals.message.option} close={closeModal} />}
        {modals.loading.isOpen && <LoadingModal message={modals.loading.option} />  }

      </div>
      </ModalsContext.Provider>
    </UserContext.Provider>
  )
}

export default App
