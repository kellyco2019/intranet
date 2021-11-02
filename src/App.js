import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Forms from './components/Forms';
import Hse from './components/Hse';

function App() {
  return (
    <div className="bg-gray-100">
      <Router>
        <Switch>
          <Route exact path="/" component={Hse} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/forms" component={Forms} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
