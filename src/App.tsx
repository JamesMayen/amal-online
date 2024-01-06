import { Route, Routes } from "react-router-dom";

import Navbar, { MobileNavbar } from "./components/navbar";
import HomePage from "./pages/home";
import ResultsPage from "./pages/ResultsPage";
import BooksPage from "./pages/BooksPage";
import LearningMaterialPage from "./pages/learningMaterial";
import PasspapersPage from "./pages/PasspapersPage";
import FriendsPage from "./pages/FriendsPage";


function App() {

  return (
    <div className="text-slate-600 min-h-screen pb-[4rem]">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/results' element={<ResultsPage />} />
        <Route path='/friends' element={<FriendsPage />} />
        <Route path='/pass-papers' element={<PasspapersPage />} />
        <Route path='/learning-materials' element={<LearningMaterialPage />} />
        <Route path='/books' element={<BooksPage />} />
      </Routes>
      <MobileNavbar />
    </div>
  );
}

export default App;
