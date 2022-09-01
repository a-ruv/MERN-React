import logo from './logo.svg';
import './App.css';
import React from 'react';
import PersonCard from './components/PersonCard';
function App() {
  return (
    <div className='App'>
      <PersonCard firstName="Jane" lastName="Doe" age={45} harColor="Black" />
      <PersonCard firstName="John" lastName="Smith" age={88} harColor="Brown" />
      <PersonCard firstName="Millard" lastName="Fillmore" age={50} harColor="Brown" />
      <PersonCard firstName="Maria" lastName="Smith" age={62} harColor="Brown" />
    </div>
  );
}

export default App;
