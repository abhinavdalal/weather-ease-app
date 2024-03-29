import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Temperatures from "./pages/Possibilities/Possibilities.jsx";
import Introduction from "./pages/Introduction/Introduction.jsx";
import Motivation from "./pages/Motivation/Motivation.jsx";
import { Home } from '@mui/icons-material';
import HomeScreen from "./pages/HomeScreen/HomeScreen.jsx";
import Helpline from './pages/Helpline/Helpline.jsx';
import Recipe from './pages/Recipe/Recipe.jsx';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Introduction/>} />
          <Route path="temp" element={<Temperatures/>} />
          <Route path="motiv" element={<Motivation />} />
          <Route path="Home" element={<HomeScreen/>} />
          <Route path="Help" element={<Helpline/>} />
          <Route path="Rec" element={<Recipe/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
