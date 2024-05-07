import HomePage from "./../../pages/HomePage.jsx";
import pageUrl from "../../page-url.js";
import AboutPage from "../../pages/AboutPage";
import WorkoutsPage from "../../pages/WorkoutsPage";
import ProfilePage from "../../pages/ProfilePage";
import TrainingPage from "../../pages/TrainingPage";
import {useContext} from "react";
import {PageContext} from "../../App.jsx";
import {Route, Routes} from "react-router-dom";

export default function Router() {
  const {setPage, page} = useContext(PageContext)

  const isFindPage = pageUrl.find((item) => item === page);
  if(!isFindPage){
    setPage('HOME');
  }
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/about' element={<AboutPage />}/>
    </Routes>
  )
      // {/*{isFindPage === 'HOME' ? <HomePage /> : null}*/}
      // {/*{isFindPage === 'ABOUT' ? <AboutPage /> : null}*/}
      // {/*{isFindPage === 'WORKOUTS' ? <WorkoutsPage /> : null}*/}
      // {/*{isFindPage === 'TRAINING' ? <TrainingPage /> : null}*/}
      // {/*{isFindPage === 'PROFILE' ? <ProfilePage /> : null}*/}


}