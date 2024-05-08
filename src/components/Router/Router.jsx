import HomePage from "./../../pages/HomePage.jsx";
import AboutPage from "../../pages/AboutPage";
import WorkoutsPage from "../../pages/WorkoutsPage";
import ProfilePage from "../../pages/ProfilePage";
import TrainingPage from "../../pages/TrainingPage";
import {Route, Routes} from "react-router-dom";
import WorkoutsShowPage from "../../pages/WorkoutsShowPage.jsx";

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/workouts' element={<WorkoutsPage />} />
      <Route path='/workouts/:id' element={<WorkoutsShowPage />} />
      <Route path='/workouts/:id/' element={<WorkoutsShowPage />} />

      {/*</Route>*/}
      {/*<Route path='/training' element={<TrainingPage />} />*/}
      {/*<Route path='/workout' element={<WorkoutsPage />}>*/}
      {/*  <Route path=':id' element={<WorkoutsPage />} />*/}
      {/*</Route>*/}
      <Route path='/about' element={<AboutPage />} />
      <Route path='/profile' element={<ProfilePage />} />
    </Routes>
  )
}