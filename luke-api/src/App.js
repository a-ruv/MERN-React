import './App.css';
import { Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import People from './components/People';
import Planet from './components/Planet'
import Error from './components/Error'

function App() {
  return (
    <div className="App">
      <Search />
      <Routes>
        <Route path='/people/:id' element={<People />} />
        <Route path='/planet/:id' element={<Planet />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
