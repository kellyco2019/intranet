
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Forms from './components/Forms';
import Hse from './components/Hse';
import TablaRD from './components/TablaRD';

function App() {
  return (
    <div className="bg-gray-100">
      <Router>
        <Switch>
          <Route exact path="/" component={Hse} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/forms" component={Forms} />
          <Route exact path="/reporte" component={TablaRD} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
