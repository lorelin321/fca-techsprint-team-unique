import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import WeatherHome from './Components/WeatherHome';
import Homepage from './Components/Homepage'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' component={WeatherHome} exact />
        <Route path='/Homepage' component={Homepage}/>
      </Router>
    </div>
  );
}

export default App;
