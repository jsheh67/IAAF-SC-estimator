import Header from './components/Header';
import Calculator from './components/Calculator';
import Footer from "./components/Footer";
import Estimator from './components/Estimator';
import Message from './components/Message';

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
  const[messages, setMessages]= useState([]);

  const showMessages =(newMessage)=>{
    setMessages([...messages, newMessage]);
    const messageAlert= document.getElementById('messages');
    messageAlert.setAttribute('class', 'alert alert-dismissible fade show p-3 mb-0' );
  }



  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    const closeButton = document.getElementById("closeButton");
    if (darkMode) {
      body.setAttribute("class", "dark-mode");
      closeButton.setAttribute("class", "btn-close")
    } else {
      body.setAttribute("class", "light-mode");
      closeButton.setAttribute("class", "btn-close btn-close-white")
    }
  }, [darkMode])

  return (
    <div className="App ">

        <Header 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <div>
        <Message 
          messages={messages}
          setMessages={setMessages}
        />
        </div>

          <Routes>
            <Route path="" element={
              <Calculator 
                resultList={resultList}
                setResultList={setResultList}
                showMessages={showMessages}
                />
              }>
            </Route>
            <Route path="/estimator" element={
              <Estimator 
                estResults={estResults}
                setEstResults={setEstResults}
                showMessages={showMessages}/>
              }>
            </Route>
          </Routes>
        <Footer />
    </div>
  );
}

export default App;
