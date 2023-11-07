// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import Card from './components/Card'
// import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Weather Ease Community App</h1>
//       <Card text={"HELLO WORLD!!"}/>
//       <div className="card">
//         <button onClick={() => {
//           console.log('button');
//           // setCount((count) => count + 1)
//         }}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Temperatures from "./pages/Possibilities/Possibilities.jsx";
import Introduction from "./pages/Introduction/Introduction.jsx";
import Motivation from "./pages/Motivation/Motivation.jsx";
import { Home } from '@mui/icons-material';
import HomeScreen from "./pages/HomeScreen/HomeScreen.jsx";


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
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
