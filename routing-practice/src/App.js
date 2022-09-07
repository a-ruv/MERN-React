import logo from './logo.svg';
import './App.css';
import {Routes, Route, useParams} from 'react-router-dom';

const Home = (props) =>{
    return(
      <h1>Welcome</h1>
    );
}

const OneParam = (props) => {
  const { param } = useParams();
  const isWord = isNaN(param);
  if(isWord){
    return (<h1>The Word is: { param }</h1>);
  }else{
    return (<h1>The number is: { param }</h1>);
  }
}

const ThreeParams = (props) => {
  const {word, color, color2} = useParams();
  return(
    <h1 style={{color:color , backgroundColor:color2 }}>The Word is: { word }</h1>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element= {<Home/>} />
        <Route path='/:param' element= {<OneParam/>} />
        <Route path='/:word/:color/:color2' element= {<ThreeParams/>} />
      </Routes>
    </div>
  );
}

export default App;
