import './App.css';
import { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Temperatures from "./pages/Possibilities/Possibilities.jsx";
import Introduction from "./pages/Introduction/Introduction.jsx";
import Motivation from "./pages/Motivation/Motivation.jsx";
import { Home } from '@mui/icons-material';
import HomeScreen from "./pages/HomeScreen/HomeScreen.jsx";
import Helpline from './pages/Helpline/Helpline.jsx';
import Recipe from './pages/Recipe/Recipe.jsx';
import ResponsiveAppBar from './components/OpenBar.jsx';
import Awareness from './pages/awareness/awareness.jsx';
import SimpleBottomNavigation from './components/BottomNavigationTest.jsx';

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState('English');
  return (
    <div className="weather-container">
    <ResponsiveAppBar
      currentLanguage={currentLanguage}
      setCurrentLanguage={setCurrentLanguage}
    />
    <BrowserRouter>
      <div className={'scrollable'}>
      <Routes>
        <Route path="/">
          <Route index element={<Introduction currentLanguage={currentLanguage}/>} />
          <Route path="temp" element={<Temperatures/>} />
          <Route path="motiv" element={<Motivation />} />
          <Route path="Home" element={<HomeScreen />} />
          <Route path="Help" element={<Helpline currentLanguage={currentLanguage}/>} />
          <Route path="Rec" element={<Recipe currentLanguage={currentLanguage}/>} />
          <Route path="aware" element={<Awareness currentLanguage={currentLanguage}/>}/>
        </Route>
      </Routes>
      </div>
      <SimpleBottomNavigation /> 
    </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
