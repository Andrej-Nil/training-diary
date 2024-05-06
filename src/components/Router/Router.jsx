import HomePage from "./../../pages/HomePage.jsx";
import pageUrl from "../../page-url.js";
import AboutPage from "../../pages/AboutPage";
import WorkoutsPage from "../../pages/WorkoutsPage";
import ProfilePage from "../../pages/ProfilePage";
import TrainingPage from "../../pages/TrainingPage";
import {useContext} from "react";
import {PageContext} from "../../App.jsx";

export default function Router() {
  const [page, changePage] = useContext(PageContext)

  const isFindPage = pageUrl.find((item) => item === page);
  if(!isFindPage){
    changePage('HOME');
  }
  return (
    <>
      {isFindPage === 'HOME' ? <HomePage /> : null}
      {isFindPage === 'ABOUT' ? <AboutPage /> : null}
      {isFindPage === 'WORKOUTS' ? <WorkoutsPage changePage={changePage}/> : null}
      {isFindPage === 'TRAINING' ? <TrainingPage changePage={changePage} /> : null}
      {isFindPage === 'PROFILE' ? <ProfilePage changePage={changePage}/> : null}
    </>
  )
}