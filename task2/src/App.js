import './App.css';
import Portfolio from "./portfolio";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
          <Switch>
              <Route path='/' component={Portfolio} exact/>
          </Switch>
      </Router>
  );
}

export default App;
