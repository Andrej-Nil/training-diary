import HomePage from "./../../pages/HomePage.jsx";
import AboutPage from "../../pages/AboutPage";
import WorkoutsPage from "../../pages/WorkoutsPage";
import ProfilePage from "../../pages/ProfilePage";
import TrainingPage from "../../pages/TrainingPage";
import {Route, Routes} from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/training' element={<TrainingPage />} />
      <Route path='/workout' element={<WorkoutsPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/profile' element={<ProfilePage />} />
    </Routes>
  )
}