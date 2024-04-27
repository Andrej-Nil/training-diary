import HomePage from "./../../pages/HomePage.jsx";
import pageUrl from "../../page-url.js";
import AboutPage from "../../pages/AboutPage";
import WorkoutsPage from "../../pages/WorkoutsPage";
import ProfilePage from "../../pages/ProfilePage";
import TrainingPage from "../../pages/TrainingPage";

export default function Router(props) {
  const {page, changePage} = props;

  const isFindPage = pageUrl.find((item) => item === page);
  if(!isFindPage){
    changePage('HOME');
  }
  return (
    <>
      {isFindPage === 'HOME' ? <HomePage changePage={changePage}/> : null}
      {isFindPage === 'ABOUT' ? <AboutPage /> : null}
      {isFindPage === 'WORKOUTS' ? <WorkoutsPage changePage={changePage}/> : null}
      {isFindPage === 'TRAINING' ? <TrainingPage changePage={changePage} /> : null}
      {isFindPage === 'PROFILE' ? <ProfilePage changePage={changePage}/> : null}
    </>
  )
}