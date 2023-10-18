import './App.css'
import  { useState } from 'react';
import LangChart from './components/LangChart';
import MonthChart from './components/MonthChart';
import Navigation from './components/Nav';

function App() {
  const [activeTab, setActiveTab] = useState('language');

  return (
    <div>
      <h1>MovieFlex Statistik</h1>
      <Navigation setActiveTab={setActiveTab} />
      {activeTab === 'language' ? (
        <LangChart />
      ) : (
        <MonthChart />
      )}
    </div>
  );
}

export default App;
