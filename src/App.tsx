import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/home";
import ResultsPage from "./pages/ResultsPage";
import LearningMaterials from "./pages/LearningMaterials";
import PassPaperPage from "./pages/PassPaperPage";


function App() {

  return (
    <div className="text-slate-600 min-h-screen">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/results' element={<ResultsPage />} />
        <Route path='/pass-papers' element={<PassPaperPage />} />
        <Route path='/learning-materials' element={<LearningMaterials />} />
      </Routes>
    </div>
  );
}

export default App;
