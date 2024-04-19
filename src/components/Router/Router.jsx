import HomePage from "./../../pages/HomePage.jsx";
import pageUrl from "../../page-url.js";
import AboutPage from "../../pages/AboutPage";
import WorkoutsPage from "../../pages/WorkoutsPage";
import ProfilePage from "../../pages/ProfilePage";
export default function Router(props) {
  const { page, openAuthModal, workout } = props;
  const isFindPage = pageUrl.find((item) => item === page);
  if(!isFindPage){
    return <p>404</p>
  }
  return (
    <>
      {isFindPage === 'HOME' ? <HomePage openAuthModal={openAuthModal} workout={workout} /> : null}
      {isFindPage === 'ABOUT' ? <AboutPage /> : null}
      {isFindPage === 'WORKOUTS' ? <WorkoutsPage /> : null}
      {isFindPage === 'PROFILE' ? <ProfilePage /> : null}
    </>
  )


}