import Header from './components/Header';
import Calculator from './components/Calculator';
import Footer from "./components/Footer";
import Estimator from './components/Estimator';

import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useNavigate} from "react-router-dom";
import Description from './components/Description';



function App() {
  // const navigate = useNavigate();

  // const[currentEvent, setCurrentEvent]= useState({});
  // const[currentTime, setCurrentTime]= useState({});
  const[resultList, setResultList]=useState([]);
  const[estResults, setEstResults]=useState([]);
  const[darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    if (darkMode) {
      body.setAttribute("class", "dark-mode");
    } else {
      body.setAttribute("class", "light-mode");
    }
  }, [darkMode])

  return (
    <div className="App ">
        <Header 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          />
       
          <Routes>
            <Route path="" element={
              <Calculator 
                resultList={resultList}
                setResultList={setResultList}/>
              }>
            </Route>
            <Route path="/estimator" element={
              <Estimator 
                estResults={estResults}
                setEstResults={setEstResults}/>
              }>
            </Route>
          </Routes>
        <Footer />
    </div>
  );
}

export default App;
