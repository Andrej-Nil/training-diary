import Header from "./components/Header/Header";

import {createContext, useState} from "react";
import Router from "./components/Router/Router";
import AuthModal from "./components/AuthModal/AuthModal";
import Service from "./Service.js";
import MessageModal from "./components/MessageModal/MessageModal";

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState('HOME');

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [messageModel, setMessageModel] = useState({
    message: null,
    isOpen: false,
    showLoader: false
  });
  const [tabAuth, setTabAuth] = useState('LOGIN');

  const service = new Service();

  function login(e){
    openMessageModal()
    const formData = new FormData(e.target);
    service.login(formData)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  async function register(){

  }

  function changePage(pageUrl) {
    setPage(pageUrl);
  }

  function openAuthModal(tab){
    setIsOpenModal(true)
    setTabAuth(tab);
  }

  function closeAuthModal(){
    setIsOpenModal(false)
  }

  function openMessageModal(){
    setMessageModel((prev) => {
      return {
        ...prev,
        isOpen: true
      }
    })
  }

  function closeMessageModal(){
    setMessageModel((prev) => {
      return {
        ...prev,
        isOpen: false
      }
    })
  }


  return (
    <UserContext.Provider value={[user, setUser]}>
      <Header openAuthModal={openAuthModal} changePage={changePage}/>
      <main className='main'>
        <div className='container'>
          <Router page={page}/>
        </div>
      </main>

      { isOpenModal
        && <AuthModal
          closeModal={closeAuthModal}
          login={login}
          register={register}
          tab={tabAuth}
          changeTab={setTabAuth} /> }

      {messageModel.isOpen
        && <MessageModal
          message={messageModel.message}
          showLoader={messageModel.showLoader}
          close={closeMessageModal}
        />
      }
    </UserContext.Provider>
  )
}

export default App
