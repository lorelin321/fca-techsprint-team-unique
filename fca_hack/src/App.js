import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import WeatherHome from './Components/WeatherHome';
import Homepage from './Components/Homepage';
import YourID from './Components/YourIdentity';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' component={WeatherHome} exact />
        <Route path='/Homepage' component={Homepage}/>
        <Route path='/yourID' component={YourID} />
      </Router> 
    </div>
  );
}

export default App;
