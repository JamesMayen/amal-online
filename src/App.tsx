import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/home";


function App() {

  return (
    <div className="text-slate-600 min-h-screen">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
