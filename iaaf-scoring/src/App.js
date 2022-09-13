import Header from './components/Header';
import './App.css';
import { useState } from 'react';
import Calculator from './components/Calculator';
import { Link } from 'react-router-dom';

function App() {

  // const[currentEvent, setCurrentEvent]= useState({});
  // const[currentTime, setCurrentTime]= useState({});
  const[resultList, setResultList]=useState([]);

  return (
    <div className="App">
        <Header />

        <Calculator 
          resultList={resultList}
          setResultList={setResultList}/>


        {/* <SelectEvent />
        <InputTime />
        <GetPoints />
        <ResultTable /> */}

    
    </div>
  );
}

export default App;
