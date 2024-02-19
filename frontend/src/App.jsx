import { BrowserRouter as Router, Route, Switch, Form } from 'react-router-dom';
import Login from './pages/auth/Login';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={Form} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
