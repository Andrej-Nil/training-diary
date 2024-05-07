import Header from "./components/Header/Header";
import {createContext, useEffect, useState} from "react";
import Router from "./components/Router/Router";
import AuthModal from "./components/AuthModal/AuthModal";
import MessageModal from "./components/MessageModal/MessageModal";
import Footer from "./components/Footer/Footer";
import LoadingModal from "./components/LoadingModal/LoadingModal.jsx";
import CreateModal from "./components/CreateModal/CreateModal.jsx";
import useService from "./hooks/useService.js";


export const UserContext = createContext(null);
export const ModalsContext = createContext('')
export const PageContext = createContext('')
function App() {
  const service = useService();
  const [user, setUser] = useState({name: 'test', isWorkout: true});

  const [page, setPage] = useState('WORKOUTS');

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




  // const [page, setPage] = useState('null');

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
      setPage('HOME');
    }else{
      setPage('HOME');
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
    setPage('HOME');
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
    <UserContext.Provider value={{user, setUser, logout}}>
      <PageContext.Provider value={{setPage, page}}>
        <ModalsContext.Provider value={{openModal, closeModal, changeOption, modals}}>

        <div className='app'>
          <Header changePage={setPage} page={page} logout={logout}/>
          <main className='main'>

            <div className='container'>
              {page && <Router />}
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
      </PageContext.Provider>
    </UserContext.Provider>
  )
}

export default App;
