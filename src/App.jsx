import Header from "./components/Header/Header";
import {createContext, useState} from "react";
import Router from "./components/Router/Router";
import AuthModal from "./components/AuthModal/AuthModal";
import Service from "./Service.js";
import MessageModal from "./components/MessageModal/MessageModal";
import Footer from "./components/Footer/Footer";
import CreateModal from "./components/CreateModal/CreateModal";

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState({name: 'AndrejNill'});
  // const [user, setUser] = useState(null);
  const [page, setPage] = useState('HOME');

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [messageModel, setMessageModel] = useState({
    message: null,
    isOpen: false,
    isLoading: false
  });

  const [isOpenCreator, setIsOpenCreator] = useState(true);
  const [workout, setWorkout] = useState(null);
  const [tabAuth, setTabAuth] = useState('LOGIN');

  const service = new Service();

  function logout() {
    setUser(null);
    setWorkout(null);
    setPage('HOME');
  }

  function login(e) {
    openMessageModal();
    showMessageLoader();
    const formData = new FormData(e.target);
    service.login(formData)
      .then((data) => handleLoginResult(data))
      .catch(() => fail({message: 'Упс! Что то пошло не так!'}));
  }

  function handleLoginResult(data) {
    if (data.success) {
      successLogin(data);
    } else {
      fail(data)
    }
  }

  function hideMessageLoader() {
    setMessageModel((prev) => {
      return {
        ...prev,
        isLoading: false
      }
    })

  }

  function showMessageLoader() {
    setMessageModel((prev) => {
      return {
        ...prev,
        isLoading: true
      }
    })

  }

  function successLogin(data) {
    hideMessageLoader();
    closeMessageModal();
    closeAuthModal();
    setUser(data.user);

  }

  function fail(data) {
    hideMessageLoader();
    setMessage(data.message);
  }

  function setMessage(message) {
    setMessageModel((prev) => {
      return {
        ...prev,
        message: message
      }
    })
  }

  function createWorkout(e) {
    openMessageModal();
    showMessageLoader();
    const formData = new FormData(e.target);
    service.create(formData)
      .then((data) => handleCreateResult(data))
      .catch(() => fail({message: 'Упс! Что то пошло не так!'}));
  }

  function handleCreateResult(data) {
    if (data.success) {
      successCreate(data);
    } else {
      fail(data)
    }
  }

  function successCreate(data){
    hideMessageLoader();
    closeMessageModal();
    closeCreator();
    setWorkout(data.workout);
    setPage('TRAINING');
    // setUser(data.user);
  }

  function register() {

  }

  function changePage(pageUrl) {
    // if(user){
    setPage(pageUrl);
    // }else {
    //   setPage('HOME');
    // }

  }

  function openAuthModal(tab) {
    setIsOpenModal(true)
    setTabAuth(tab);
  }

  function closeAuthModal() {
    setIsOpenModal(false)
  }

  function openMessageModal() {
    setMessageModel((prev) => {
      return {
        ...prev,
        isOpen: true
      }
    })
  }

  function closeMessageModal() {
    setMessageModel((prev) => {
      return {
        ...prev,
        message: null,
        isOpen: false
      }
    })
  }

  function openCreator() {
    setIsOpenCreator(true)
  }
  function closeCreator() {
    setIsOpenCreator(false)
  }

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className='app'>
        <Header logout={logout} openAuthModal={openAuthModal} changePage={changePage} page={page}/>
        <main className='main'>
          <div className='container'>
            <Router
              openCreator={openCreator}
              changePage={changePage}
              workout={workout}
              setWorkout={setWorkout}
              openAuthModal={openAuthModal}
              page={page}
            />
          </div>
        </main>
        <Footer/>

        {isOpenModal
          && <AuthModal
            closeModal={closeAuthModal}
            login={login}
            register={register}
            tab={tabAuth}
            changeTab={setTabAuth}/>}

        {isOpenCreator
          && <CreateModal
            workout={workout}
            createWorkout={createWorkout}
            close={closeCreator} />}

        {messageModel.isOpen
          && <MessageModal
            message={messageModel.message}
            isLoading={messageModel.isLoading}
            close={closeMessageModal}/>}


      </div>
    </UserContext.Provider>
  )
}

export default App
