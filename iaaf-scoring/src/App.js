import Header from './components/Header';
import './App.css';
import SelectEvent from './components/SelectEvent';
import InputTime from './components/InputTime';
import GetPoints from './components/GetPoints';
import ResultTable from './components/ResultTable';

import { useState } from 'react';

function App() {

  const[currentEvent, setCurrentEvent]= useState({});
  const[currentTime, setCurrentTime]= useState({});
  const[resultList, setResultList]=useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <SelectEvent />
        <InputTime />
        <GetPoints />
        <ResultTable />

       
       
       
      </header>
    </div>
  );
}

export default App;
