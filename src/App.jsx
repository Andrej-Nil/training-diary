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
  const [page, setPage] = useState('HOME');

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [messageModel, setMessageModel] = useState({
    message: null,
    isOpen: false,
    isLoading: false
  });

  const [isOpenCreator, setIsOpenCreator] = useState(false);
  const [workout, setWorkout] = useState(true)
  const [tabAuth, setTabAuth] = useState('LOGIN');

  const service = new Service();

  function logout() {
    setUser(null);
    setWorkout(null)
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
      success(data);
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

  function success(data) {
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



  return (
    <UserContext.Provider value={[user, setUser]}>

      <div className='app'>
        <Header logout={logout} openAuthModal={openAuthModal} changePage={changePage}/>
        <main className='main'>
          <div className='container'>
            <Router
              workout={workout}
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

        {messageModel.isOpen
          && <MessageModal
            message={messageModel.message}
            isLoading={messageModel.isLoading}
            close={closeMessageModal}/>}

        {isOpenCreator
        && <CreateModal />
        }
      </div>
    </UserContext.Provider>
  )
}

export default App
