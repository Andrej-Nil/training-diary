import HomePage from "./../../pages/HomePage.jsx";
import pageUrl from "../../page-url.js";
import AboutPage from "../../pages/AboutPage";
import WorkoutsPage from "../../pages/WorkoutsPage";
import ProfilePage from "../../pages/ProfilePage";
import TrainingPage from "../../pages/TrainingPage";
export default function Router(props) {
  const { page, openAuthModal, workout, setWorkout, changePage, openCreator} = props;
  const isFindPage = pageUrl.find((item) => item === page);
  if(!isFindPage){
    return <p>404</p>
  }
  return (
    <>
      {isFindPage === 'HOME' ? <HomePage changePage={changePage} openAuthModal={openAuthModal} workout={workout}/> : null}
      {isFindPage === 'ABOUT' ? <AboutPage /> : null}
      {isFindPage === 'WORKOUTS' ? <WorkoutsPage changePage={changePage}/> : null}
      {isFindPage === 'TRAINING'
        ? <TrainingPage
          changePage={changePage} openCreator={openCreator} workout={workout} setWorkout={setWorkout} /> : null}
      {isFindPage === 'PROFILE' ? <ProfilePage changePage={changePage}/> : null}
    </>
  )
}