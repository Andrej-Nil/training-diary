import Header from "./components/Header/Header";
import {createContext, useEffect, useState} from "react";
import Router from "./components/Router/Router";
import AuthModal from "./components/AuthModal/AuthModal";
import MessageModal from "./components/MessageModal/MessageModal";
import Footer from "./components/Footer/Footer";
import LoadingModal from "./components/LoadingModal/LoadingModal.jsx";
import CreateModal from "./components/CreateModal/CreateModal.jsx";
import useService from "./hooks/useService.js";
import {redirect} from "react-router-dom";


export const UserContext = createContext(null);
export const ModalsContext = createContext('')
function App() {
  const service = useService();
  const [user, setUser] = useState({name: 'test', currentWorkout: 'id+dfksjgf'});

  const [modals, setModals] = useState({
    loading: {isOpen: false, option: 'Загружаю'},
    message: {isOpen: false, option: ''},
    auth: {isOpen: false, option: 'LOGIN'},
    create: {isOpen: false, option: ''},
    addExercise: {isOpen: false, option: ''}
  });
  // useEffect(() => {
  //   openModal('loading')
  //     service.getUser()
  //       .then((data) => handleSetUser(data))
  //       .catch((error) => {
  //         closeModal('loading');
  //         setPage('HOME');
  //       });
  // }, [])



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

  function changeOption(key, option) {
    setModals((prev) => {
      const modal = {...prev[key]}
      modal.option = option;
      return {  ...prev, [key]: modal }
    })
  }

  function handleSetUser(data) {
    closeModal('loading');
    if(data.success){
      setUser(data.user);
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
    return redirect('/');
  }

  function fail(data) {
    closeModal('loading');
    openModal('message', data.message);
  }

  return (
    <UserContext.Provider value={{user, setUser, logout}}>
        <ModalsContext.Provider value={{openModal, closeModal, changeOption, modals}}>

        <div className='app'>
          <Header />
          <main className='main'>

            <div className='container'>
              <Router />
            </div>

          </main>

          <Footer/>

          {modals.auth.isOpen
            && <AuthModal
              tab={modals.auth.option}
              changeTab={changeOption}
              close={closeModal}
              login={login}
              register={register} />}

          {modals.create.isOpen && <CreateModal close={closeModal} />}
          {modals.message.isOpen && <MessageModal message={modals.message.option} close={closeModal} />}
          {modals.loading.isOpen && <LoadingModal message={modals.loading.option} /> }

        </div>

        </ModalsContext.Provider>

    </UserContext.Provider>
  )
}

export default App;
