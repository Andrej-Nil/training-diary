import Header from "./components/Header/Header";

import {createContext, useState} from "react";
import Router from "./components/Router/Router";
import AuthModal from "./components/AuthModal/AuthModal";

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState('HOME');

  const [isOpenAuthModal, setIsAuthOpenModal] = useState(false);
  const [tabAuth, setTabAuth] = useState('LOGIN');

  function changePage(pageUrl) {
    setPage(pageUrl);
  }

  function openAuthModal(tab){
    setIsAuthOpenModal(true );
    setTabAuth(tab);
  }

  function closeAuthModal(){
    setIsAuthOpenModal(false );
  }


  return (
    <UserContext.Provider value={user}>
      <Header openAuthModal={openAuthModal} changePage={changePage}/>
      <main className='main'>
        <div className='container'>
          <Router page={page}/>
        </div>
      </main>

      { isOpenAuthModal && <AuthModal close={closeAuthModal} tab={tabAuth} changeTab={setTabAuth} />  }
    </UserContext.Provider>
  )
}

export default App
