import Header from './components/Header';
import './App.css';

import { useState } from 'react';
import Calculator from './components/Calculator';

function App() {

  // const[currentEvent, setCurrentEvent]= useState({});
  // const[currentTime, setCurrentTime]= useState({});
  const[resultList, setResultList]=useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <Header />

        <Calculator 
          resultList={resultList}
          setResultList={setResultList}/>


        {/* <SelectEvent />
        <InputTime />
        <GetPoints />
        <ResultTable /> */}

       
       
       
      </header>
    </div>
  );
}

export default App;
