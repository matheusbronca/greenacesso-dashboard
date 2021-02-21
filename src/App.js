import './styles/variables.css';
import './styles/App.css';
import Sidenav from './Components/Sidenav/Sidenav';
import Home from './Components/Home';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Sidenav />
      <div className="main-container">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
